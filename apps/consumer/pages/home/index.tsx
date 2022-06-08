import { HomeConsumer, withIonicPage, TabBottom } from '@monorepo/ui-shares';
import dynamic from 'next/dynamic';
import {
  getListFlashSaleApi,
  getListProduct,
  getProfileApi,
  handleResponse,
  listCategoryApi,
} from '@monorepo/function-shares';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ICategory, IProduct } from '@monorepo/model';
interface HomeIndex {
  items?: IProduct[];
  list_category?: ICategory[];
}
function HomeIndex(props: HomeIndex) {
  const { items, list_category } = props;
  const positionTab = useSelector((state) => state['TabPositionSlice']);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getProfileApi();
        handleResponse({ res, success: (res) => {}, error: (res) => {} });
      } catch (error) {}
    };
    getProfile();
  }, []);

  return (
    <>
      <HomeConsumer
        data={items}
        position={positionTab}
        list_category={list_category}
      />
      <TabBottom />
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch data from external API
  const data = await getListProduct();
  const flash_sale_data = await getListFlashSaleApi();
  const size = 4;
  const items = data.slice(0, size);
  const list_category = await listCategoryApi();
  // // Pass data to the page via props
  return {
    props: { items: items, flash_sale_data: flash_sale_data, list_category },
  };
}

// export default HomeIndex;
export default dynamic(() => Promise.resolve(withIonicPage(HomeIndex)), {
  ssr: false,
});
