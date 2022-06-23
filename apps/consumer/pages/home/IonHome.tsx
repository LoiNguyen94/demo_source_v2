import {
  withIonicPage,
  TabMio,
  Buttons,
} from '@monorepo/ui-shares';
import dynamic from 'next/dynamic';
import {
  getListProduct,
  listCategoryApi,
  SCREEN,
  useAppSelector,
  useNavigation,
  useWindowSize,
} from '@monorepo/function-shares';
import { useEffect, useState } from 'react';
export const IonHome = () => {
  const { widthFixed } = useWindowSize();
  const { push } = useNavigation();
  const token = useAppSelector((state) => state.auth.token);
  const isAuth = token !== undefined;
  const [state, setState] = useState({
    list_category: [],
    items: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await getProfileApi();
        const products = await getListProduct();
        const list_category = await listCategoryApi();
        setState({
          items: products,
          list_category: list_category,
        });
        // handleResponse({ res, success: (res) => {}, error: (res) => {} });
      } catch (error) { }
    };
    fetchData();
    return () => { };
  }, []);
  const goToLogin = () => {
    push(SCREEN.login);
  };
  return (
    <>
      <TabMio data={state.items} list_category={state.list_category} />
      {!isAuth ? (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              display: 'flex',
              justifyContent: 'space-around',
              height: '80px',
              borderRadius: '12px 12px 0px 0px',
              width: widthFixed,
              padding: '12px 20px 0px 20px',
            }}
          >
            <Buttons
              title="Đăng nhập ngay"
              handleClick={goToLogin}
              bgColor={'#EC4261'}
              titleColor={'#FFFFFF'}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default dynamic(() => Promise.resolve(withIonicPage(IonHome)), {
  ssr: false,
});
