import { Form, Input, Button } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  CloseOutlined,
} from '@ant-design/icons';
import styles from './register.module.scss';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import SvgList from '../../assets/store.svg';
import { phoneNumberValidReg } from '@monorepo/function-shares';
export type RegisterData = {
  phone: string;
  username: string;
  password: string;
  confirm_password: string;
  partner_id: string;
};
interface Props {
  onSubmit: (data: RegisterData) => void;
}
type Ref = {
  setMessageError: ({
    isValid,
    msg,
  }: {
    isValid: boolean;
    msg: string;
  }) => void;
};
const FormRegister: ForwardRefRenderFunction<Ref, Props> = (props, ref) => {
  const { onSubmit } = props;
  const [form] = Form.useForm();
  const [errors, setErrors] = useState({
    username: { isValid: true, msg: '' },
    phone: { isValid: true, msg: '' },
    password: { isValid: true, msg: '' },
    confirm_password: { isValid: true, msg: '' },
  });
  const [msgError, setMsgError] = useState({ isValid: true, msg: '' });
  const onFinish = async (values: RegisterData) => {
    onSubmit(values);
  };

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
    if (!msgError.isValid) {
      setMsgError({ isValid: true, msg: '' });
    }
  };
  return (
    <Form
      name="normal_login"
      form={form}
      onFocus={onFocus}
      style={{ marginTop: 20 }}
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        noStyle
        name="username"
        rules={[
          () => ({
            template: '',
            validator(_, value) {
              if (value && value.length <= 50 && value.length >= 3) {
                setErrors((errors) => ({
                  ...errors,
                  username: { isValid: true, msg: '' },
                }));
                return Promise.resolve();
              }
              
              setErrors((errors) => ({
                ...errors,
                username: {
                  isValid: false,
                  msg:
                    value && value.length > 50
                      ? 'H??? v?? t??n kh??ng qu?? 50 k?? t???'
                      : 'H??? v?? t??n qu?? ng???n. Vui l??ng nh???p 3 k?? t??? tr??? l??n',
                },
              }));
              return Promise.reject();
            },
          }),
        ]}
      >
        <Input
          placeholder="H??? v?? t??n"
          className="input-auth-phone"
          style={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
          allowClear={{ clearIcon: <CloseOutlined onClick={() => form.resetFields(['username'])} /> }}
        />
      </Form.Item>
      {renderError('username')}
      <Form.Item
        noStyle
        name="phone"
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
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            marginTop: 10,
          }}
          allowClear={{ clearIcon: <CloseOutlined onClick={() => form.resetFields(['phone'])} /> }}
        />
      </Form.Item>
      {renderError('phone')}
      <Form.Item
        name="password"
        noStyle
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
          placeholder="M???t kh???u (??t nh???t 6 k?? t???)"
          className="input-auth"
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            marginTop: 10,
          }}
          iconRender={(visible) =>
            form.getFieldValue('password') ? (
              visible ? (
                <EyeTwoTone />
              ) : (
                <EyeInvisibleOutlined />
              )
            ) : (
              <span />
            )
          }
        />
      </Form.Item>
      {renderError('password')}
      <Form.Item
        noStyle
        name="confirm_password"
        style={{ marginTop: 10 }}
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
          placeholder="Nh???p l???i m???t kh???u"
          className="input-auth"
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            marginTop: 10,
          }}
          iconRender={(visible) =>
            form.getFieldValue('confirm_password') ? (
              visible ? (
                <EyeTwoTone />
              ) : (
                <EyeInvisibleOutlined />
              )
            ) : (
              <span />
            )
          }
        />
      </Form.Item>
      {renderError('confirm_password')}
      <Form.Item name="partner_id" noStyle>
        <Input
          placeholder="M?? ?????i t??c (n???u c??)"
          className="input-auth-phone"
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            marginTop: 10,
          }}
          allowClear={{ clearIcon: <CloseOutlined onClick={() => form.resetFields(['partner_id'])} /> }}
        />
      </Form.Item>
      <div style={{ marginTop: 5, fontSize: 12, color:'#B6B6B6' }}>
        *M?? ?????i t??c l?? s??? ??i???n tho???i c???a ?????i t??c gom ????n trong C??ng ty ho???c Khu
        v???c c???a b???n.{' '}
      </div>
      <div
        style={{
          width: '100%',
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
      <Form.Item style={{ marginTop: 10 }}>
        <Button
          htmlType="submit"
          className="register-form-button"
          style={{
            backgroundColor: '#EC4261',
            color: '#FFFFFF',
            borderRadius: 10,
            width: '100%',
            marginTop: 0,
          }}
        >
          ????ng k??
        </Button>
      </Form.Item>
    </Form>
  );
};
const RegisterForm = forwardRef(FormRegister);
export type RegisterFormType = React.ElementRef<typeof RegisterForm>;
export { RegisterForm };