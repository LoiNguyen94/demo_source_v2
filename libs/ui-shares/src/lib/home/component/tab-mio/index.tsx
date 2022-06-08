import { ICategory } from '@monorepo/model';
import { TransitionLayout, Header } from '@monorepo/ui-shares';
import { isWeb } from '@monorepo/function-shares';
import Banner from './banner';
import Category from './category';
import FlashSale from './flashsale';
import { ReactNode } from 'react';
export interface TabMioProps {
  id?: string;
  data?: any;
  list_category: ICategory[];
}

export function TabMio({ data, list_category }: TabMioProps) {
  const Layout = ({ children }: { children: ReactNode }) =>
    isWeb ? <>{children}</> : <TransitionLayout>{children}</TransitionLayout>;

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
      </div>
    </Layout>
  );
}

export default TabMio;
