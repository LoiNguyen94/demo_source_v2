import { Header, withIonicPage, TransitionLayout } from '@monorepo/ui-shares';
import { useCallback, useRef, useState } from 'react';
import { ModalOtp, TypeModalOtpInput, Loading } from '@monorepo/ui-shares';
import ForgetForm, { ForgotData, ForgotFormType } from './forgot_form';
import { Storage } from '@capacitor/storage';
import {
  sendOtpApi,
  forgotPasswordApi,
  phoneExistApi,
  handleResponse,
  useWindowSize,
  useNavigation,
  isWeb,
  SCREEN,
  loginApi,
  loginSuccess,
  setDefaultToken,
  fetchListAddressConfig,
} from '@monorepo/function-shares';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
function ForgetPassword() {
  const dispatch = useDispatch()
  const { goBack, replaceScreen, push } = useNavigation();
  const { height, widthFixed } = useWindowSize();
  const refModalOtp = useRef<TypeModalOtpInput>();
  const [data, setData] = useState<ForgotData>();
  const [isLoading, setLoading] = useState<boolean>();
  const refForm = useRef<ForgotFormType>();
  const showModal = useCallback(() => {
    refModalOtp.current.show();
  }, []);

  const goToHome = () => {
    if(isWeb) {
      replaceScreen(SCREEN.home);
    }else {
      goBack()
    }
  }
  
  const login =(phone: string, password: string) => {
    loginApi(phone, password)
    .then(async (res) => {
      handleResponse({
        res,
        success: async (res) => {
          dispatch(
            loginSuccess({
              token: res.data.data.token,
              profile: res.data.data.profile,
            })
          );
          setLoading(false);
          await Storage.set({ key: 'token', value: res.data.data.token });
          await Storage.set({
            key: 'profile',
            value: JSON.stringify(res.data.data.profile),
          });
          setDefaultToken(res.data.data.token);
          fetchListAddressConfig();
          goToHome()
        },
        error: (res) => {
          refForm.current.setMessageError({
            isValid: false,
            msg: res?.data?.data?.message ?? res?.data?.status?.message,
          });
          setLoading(false);
        },
      });
    })
    .catch((err) => {
      setLoading(false);
      refForm.current.setMessageError({
        isValid: false,
        msg: err?.response?.data?.message ?? '',
      });
    });
  }
  const updateNewPwd = async (value: string) => {
    try {
      const res = await forgotPasswordApi({
        otpCode: value,
        password: data.password,
        phone: data.phone,
      });
      handleResponse({
        res,
        success: () => {
          toast.success('Thay đổi mật khẩu thành công');
          login(data.phone, data.password)
          refModalOtp.current.hide();
        },
        error: () => {
          refModalOtp.current.setErrorMessage({
            isValid: false,
            msg: res.data.data?.message ?? res.data?.status?.message,
          });
        },
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message ?? 'Thay đổi mật khẩu không thành công'
      );
      refForm.current.setMessageError({
        isValid: false,
        msg: error?.response?.data?.message,
      });
    }
  };

  const resendOtp = () => {
    sendOtpApi(data.phone);
  };

  const submit = async (value: ForgotData) => {
    setLoading(true);
    try {
      setData(value);
      const res = await phoneExistApi(value.phone);
      if (res.data.data.isExist) {
        await sendOtpApi(value.phone);
        showModal();
      } else {
        refForm.current.setMessageError({
          isValid: false,
          msg: !res.data.data.isExist
            ? 'Số điện thoại không tồn tại'
            : res.data.status.message,
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      refForm.current.setMessageError({
        isValid: false,
        msg: error?.response?.data?.message,
      });
    }
  };
  return (
    <TransitionLayout
      title="Tất cả sản phẩm"
      description="Mua mọi thứ"
      photo=""
    >
      <>
        <Header title={'Quên mật khẩu'} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            marginTop: 0,
            alignItems: 'center',
            backgroundColor: '#f5f6f9',
            width: widthFixed,
            height: height,
          }}
        >
          <ForgetForm onSubmit={submit} ref={refForm} />
        </div>
        <ModalOtp
          getOtp={updateNewPwd}
          resendOtp={resendOtp}
          ref={refModalOtp}
          phone={data?.phone ?? ''}
        />
        {isLoading ? <Loading /> : null}
      </>
    </TransitionLayout>
  );
}

export async function getStaticProps(context) {
  return { props: {} };
}

export default dynamic(() => Promise.resolve(withIonicPage(ForgetPassword)), { ssr: false });
