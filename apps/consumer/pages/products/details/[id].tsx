import {
  getProductDetail,
} from '@monorepo/function-shares';
import dynamic from 'next/dynamic';
import Detail from './IonDetail';
import { GetServerSideProps } from 'next';
export default dynamic(() => Promise.resolve(Detail), { ssr: true });


export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context?.params?.id;
    const detail = await getProductDetail(id.toString());
    return { props: { detail } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
