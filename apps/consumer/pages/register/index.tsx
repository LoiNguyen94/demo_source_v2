import { Capacitor } from '@capacitor/core';
import { useCallback, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Header,
  SvgList,
  RegisterForm,
  RegisterData,
  RegisterFormType,
  Loading,
  withIonicPage,
  TransitionLayout,
} from '@monorepo/ui-shares';
import { Storage } from '@capacitor/storage';
import { ModalOtp, TypeModalOtpInput } from '@monorepo/ui-shares';
import {
  fetchListAddressConfig,
  genRefererIdApi,
  getProfileApi,
  handleResponse,
  isWeb,
  loginSuccess,
  phoneExistApi,
  SCREEN,
  sendOtpApi,
  setDefaultToken,
  signupApi,
  useNavigation,
  useWindowSize,
} from '@monorepo/function-shares';
import { SignUpParam } from '@monorepo/function-shares';
import styles from './register.module.scss';
import { Row } from 'antd';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function Register(props) {
  const refModalOtp = useRef<TypeModalOtpInput>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [registerData, setRegisterData] = useState<SignUpParam>();
  const { height, widthFixed } = useWindowSize();
  const { goBack, replaceScreen } = useNavigation();
  const dispatch = useDispatch();
  const showModal = useCallback(() => {
    refModalOtp.current.show();
  }, []);
  const refForm = useRef<RegisterFormType>();
  const resendOtp = () => {
    sendOtpApi(registerData?.phone);
  };
  const submit = async (value: RegisterData) => {
    setLoading(true);
    setRegisterData({
      address: '',
      fullName: value.username,
      phone: value.phone,
      platform: Capacitor.getPlatform() || '',
      otpCode: '',
      referer_id: '',
      password: value.password,
    });
    try {
      const res = await phoneExistApi(value.phone);
      if (!res.data.data?.isExist) {
        const code = value?.partner_id?.length ? value?.partner_id : '24062020';
        const response = await genRefererIdApi(code);
        if (response?.data?.data?.entity_id) {
          await sendOtpApi(value.phone);

          setRegisterData((preState) => ({
            ...preState,
            referer_id: response.data.data.entity_id,
          }));
          showModal();
        } else {
          refForm.current.setMessageError({
            isValid: false,
            msg: response.data.data.message ?? response.data.status.message,
          });
        }
      } else {
        refForm.current.setMessageError({
          isValid: false,
          msg: 'S??? ??i???n tho???i n??y ???? t???n t???i',
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      refForm.current.setMessageError({
        isValid: false,
        msg: error?.response?.data?.message ?? '',
      });
    }
  };

  const goToHome = () => {
    if(isWeb) {
      replaceScreen(SCREEN.home);
    }else {
      goBack()
    }
  }
  const getOtp = useCallback(
    async (value: string) => {
      try {
        const res = await signupApi({ ...registerData, otpCode: value });
        if (res.data.status.code === 200) {
          toast.success(res?.data?.data?.message);
          setDefaultToken(res.data.data?.token);
          const response = await getProfileApi();
          handleResponse({
            res: response,
            success: () => {
              toast.success('????ng k?? th??nh c??ng');
              dispatch(
                loginSuccess({
                  token: res.data.data?.token,
                  profile: response.data.data.profile,
                })
              );
              Storage.set({ key: 'token', value: res.data.data?.token ?? '' });
              Storage.set({
                key: 'profile',
                value: JSON.stringify(response.data.data?.profile ?? {}),
              });
              fetchListAddressConfig();
              goToHome()
            },
            error: () => {
              goToHome()
            },
          });
        } else {
          refModalOtp.current.setErrorMessage({
            isValid: false,
            msg: res.data.data?.message ?? res.data?.status?.message,
          });
          // toast.error(res?.data?.data?.message ?? res?.data?.status?.message);
        }
      } catch (err) {
        toast.error(
          err?.response?.data?.message ?? err?.response?.status?.message
        );
      }
    },
    [registerData, dispatch, replaceScreen]
  );
  return (
    <TransitionLayout
      title="T???t c??? s???n ph???m"
      description="Mua m???i th???"
      photo=""
    >
      <div
        style={{
          display: 'flex',
          width: widthFixed,
          flex: 1,
          flexDirection: 'column',
          height: height,
          backgroundColor: '#f5f6f9',
        }}
      >
        <Header title={'????ng k?? t??i kho???n'} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
          }}
        >
          <div style={{ marginTop: 120 }}>
            <SvgList.SvgMioIcon />
          </div>
          <RegisterForm onSubmit={submit} ref={refForm} />
          <div className={styles['service-privacy-note']}>
            B???ng vi???c ????ng k??, b???n ???? ?????ng ?? v???i
          </div>
          <Row className={styles['service-privacy-note']}>
            <div style={{ color: '#f0224f', marginRight: 4 }}>
              ??i???u kho???n D???ch v???
            </div>{' '}
            &
            <div style={{ color: '#f0224f', marginLeft: 4, marginRight: 4 }}>
              Ch??nh s??ch Ri??ng t??
            </div>{' '}
            c???a Mio.
          </Row>
        </div>
          <div className={styles['login-form-register']} onClick={() => goBack()}>
            B???n ???? c?? t??i kho???n?
            <div className={styles['btn-register']}>????ng nh???p</div>
          </div>
        <ModalOtp
          getOtp={getOtp}
          resendOtp={resendOtp}
          ref={refModalOtp}
          phone={registerData?.phone}
        />
        {isLoading ? <Loading /> : null}
      </div>
    </TransitionLayout>
  );
}

export async function getStaticProps(context) {
  return { props: {} };
}
export default dynamic(() => Promise.resolve(withIonicPage(Register)), {
  ssr: false,
});
