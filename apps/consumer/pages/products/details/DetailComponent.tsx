import { Detail } from '@monorepo/ui-shares';
import { TransitionLayout, Header } from '@monorepo/ui-shares';
import Head from 'next/head';
interface DetailProps {
  match?: { id: any };
  detail: any;
}
const DetailComponent = (props: DetailProps) => {
  if(!props.detail) return null;
  return (
    <>
     <Head>
          <title>{props.detail?.name}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, user-scalable=no"
          />
          <meta property="og:title" content={props.detail?.name} key="title" />
          <meta property="og:description" content={props.detail?.log_time} />
          <meta property="og:image" content={props.detail?.photo} />
        </Head>
        <TransitionLayout>
      <Header title="Chi tiết sản phẩm" />
      <Detail detail={props.detail} />
    </TransitionLayout>
    </>
  
  );
};

export default DetailComponent;
