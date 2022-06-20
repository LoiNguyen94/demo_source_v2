import { Detail } from '@monorepo/ui-shares';
import { TransitionLayout, Header } from '@monorepo/ui-shares';
import Head from 'next/head';
interface DetailProps {
  match?: { id: any };
  detail: any;
}
const DetailComponent = (props: DetailProps) => {
  if (!props.detail) return null;
  return (
    <>
      <TransitionLayout>
        <Header title="Chi tiết sản phẩm" />
        <Detail detail={props.detail} />
      </TransitionLayout>
    </>
  );
};

export default DetailComponent;
