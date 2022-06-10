import { ICategory } from '@monorepo/model';
import { TransitionLayout, Header, Buttons } from '@monorepo/ui-shares';
import {
  isWeb,
  SCREEN,
  useNavigation,
  signOut,
} from '@monorepo/function-shares';
import Banner from './banner';
import Category from './category';
import FlashSale from './flashsale';
import { ReactNode, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface TabMioProps {
  id?: string;
  data?: any;
  list_category: ICategory[];
}

export const TabMio = memo(({ data, list_category }: TabMioProps) => {
  const { push } = useNavigation();
  const dispatch = useDispatch();

  const Layout = ({ children }: { children: ReactNode }) =>
    isWeb ? <>{children}</> : <TransitionLayout>{children}</TransitionLayout>;

  const goToLogin = () => {
    dispatch(signOut(''));
    push(SCREEN.login);
  };

  return (
    <Layout>
      <Header title="" type="TabMio" />
      <div
        style={{
          // backgroundColor: '#E5E5E5',
          paddingTop: 21,
          paddingBottom: 120,
        }}
      >
        <Banner />
        <Category data={list_category} />
        <FlashSale data={data} />
        <div style={{ padding: 12 }}>
          <Buttons
            title="Đăng nhập ngay"
            handleClick={goToLogin}
            bgColor={'#EC4261'}
            titleColor={'#FFFFFF'}
          />
        </div>
      </div>
    </Layout>
  );
});

export default TabMio;
