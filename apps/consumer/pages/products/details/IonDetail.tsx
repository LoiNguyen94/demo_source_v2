import {  withIonicPage } from '@monorepo/ui-shares';
import {
  getProductDetail,
} from '@monorepo/function-shares';
import { useCallback, useEffect, useState } from 'react';
import DetailComponent from './DetailComponent';
interface DetailProps {
  match?: { params: { id: any } };
  detail: undefined;
}
const DetailContainer = (props: DetailProps) => {
  const [data, setData] = useState(props.detail);
  const fetchDetail =  useCallback(async () => {
    try {
      const id = props?.match?.params?.id;
      if(id) {
        const detail = await getProductDetail(id);
        setData(detail);
      }
    } catch (err) {}
  },[props?.match,]);
  useEffect(() => {
    if (!data) {
      fetchDetail();
    }
  }, [fetchDetail, data]);

  if (!data) return null;
  return <DetailComponent detail={data} />;
};

export default withIonicPage(DetailContainer);
