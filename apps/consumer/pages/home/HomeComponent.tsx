import { TabMio } from '@monorepo/ui-shares';
import {
  getListProduct,
  listCategoryApi,
} from '@monorepo/function-shares';
import { useEffect, useState } from 'react';
export const HomeIndex = () => {
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
  }, []);

  return (
    <TabMio data={state.items} list_category={state.list_category} />
  );
};

export default HomeIndex;
