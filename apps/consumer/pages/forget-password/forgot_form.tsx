import { Form, Input, Button } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  CloseOutlined,
} from '@ant-design/icons';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import { SvgList } from '@monorepo/ui-shares';
import { phoneNumberValidReg } from '@monorepo/function-shares';
export type ForgotData = {
  phone: string;
  password: string;
  confirm_password: string;
};
type Props = {
  onSubmit: (value: { phone: string; password: string }) => void;
};
type Ref = {
  setMessageError: ({
    isValid,
    msg,
  }: {
    isValid: boolean;
    msg: string;
  }) => void;
};
const FormForgetPassword: ForwardRefRenderFunction<Ref, Props> = (
  props,
  ref
) => {
  const [form] = Form.useForm();
  const { onSubmit } = props;
  const onFinish = (values: { phone: string; password: string }) => {
    onSubmit(values);
  };

  const [msgError, setMsgError] = useState({ isValid: true, msg: '' });
  const [errors, setErrors] = useState({
    phone: { isValid: true, msg: '' },
    password: { isValid: true, msg: '' },
    confirm_password: { isValid: true, msg: '' },
  });

  useImperativeHandle(ref, () => ({
    setMessageError: ({ isValid, msg }) => {
      setMsgError({ isValid, msg });
    },
  }));

  const renderError = (key: keyof typeof errors) => {
    return (
      <div
        style={{
          width: '100%',
          color: 'red',
          marginTop: 10,
        }}
      >
        {!errors[key].isValid ? (
          <>
            <SvgList.SvgErrorIcon /> {errors[key].msg}
          </>
        ) : (
          <span></span>
        )}
      </div>
    );
  };


  const onFocus = () => {
    setMsgError({ isValid: true, msg: '' });
  };

  return (
    <Form
      name="normal_login"
      form={form}
      onFocus={onFocus}
      style={{ marginTop: 146 }}
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="phone"
        noStyle
        rules={[
          () => ({
            template: '',
            validator(_, value) {
              if (value && value.match(phoneNumberValidReg)) {
                setErrors((errors) => ({
                  ...errors,
                  phone: { isValid: true, msg: '' },
                }));
                return Promise.resolve();
              }
              setErrors((errors) => ({
                ...errors,
                phone: {
                  isValid: false,
                  msg:
                    value && !value.match(phoneNumberValidReg)
                      ? 'S??? ??i???n tho???i kh??ng h???p l???.'
                      : 'Vui l??ng nh???p s??? ??i???n tho???i.',
                },
              }));
              return Promise.reject();
            },
          }),
        ]}
      >
        <Input
          placeholder="S??? ??i???n tho???i"
          type="number"
          className="input-auth-phone"
          allowClear={{ clearIcon: <CloseOutlined /> }}
          style={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
        />
      </Form.Item>
      {renderError('phone')}
      <Form.Item
        noStyle
        name="password"
        rules={[
          () => ({
            template: '',
            validator(_, value) {
              if (value && value.length >= 6) {
                setErrors((errors) => ({
                  ...errors,
                  password: { isValid: true, msg: '' },
                }));
                return Promise.resolve();
              }
              setErrors((errors) => ({
                ...errors,
                password: {
                  isValid: false,
                  msg:
                    value && value.length < 6
                      ? 'M???t kh???u ph???i c?? ??t nh???t 6 k?? t???.'
                      : 'Vui l??ng nh???p m???t kh???u',
                },
              }));
              return Promise.reject();
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="M???t kh???u m???i (??t nh???t 6 k?? t???)"
          className="input-auth"
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            marginTop: 10,
          }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      {renderError('password')}
      <Form.Item
        noStyle
        name="confirm_password"
        className="form-item-password"
        rules={[
          () => ({
            template: '',
            validator(_, value) {
              if (value && value === form.getFieldValue('password')) {
                setErrors((errors) => ({
                  ...errors,
                  confirm_password: { isValid: true, msg: '' },
                }));
                return Promise.resolve();
              }
              setErrors((errors) => ({
                ...errors,
                confirm_password: {
                  isValid: false,
                  msg: 'M???t kh???u x??c nh???n ch??a ????ng.',
                },
              }));
              return Promise.reject();
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Nh???p l???i m???t kh???u m???i"
          className="input-auth"
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            marginTop: 10,
          }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      {renderError('confirm_password')}
      <div
        style={{
          width: '100%',
          marginTop: 10,
          textAlign: 'center',
          color: 'red',
        }}
      >
        <div
          style={{
            width: '100%',
            // marginTop: 10,
            textAlign: 'center',
            color: 'red',
          }}
        >
          {!msgError.isValid ? (
            <>
              <SvgList.SvgErrorIcon /> {msgError.msg}
            </>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      <Form.Item style={{ marginTop: 20 }}>
        <Button
          htmlType="submit"
          className="login-form-button"
          style={{
            backgroundColor: '#EC4261',
            color: '#FFFFFF',
            borderRadius: 10,
            width: '100%',
          }}
        >
          C???p nh???t m???t kh???u
        </Button>
      </Form.Item>
    </Form>
  );
};

const ForgotForm = forwardRef(FormForgetPassword);
export type ForgotFormType = React.ElementRef<typeof ForgotForm>;
export default ForgotForm;
