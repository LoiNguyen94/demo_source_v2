import {
  TransitionLayout,
  Header,
  LocationScreen,
  withIonicPage,
} from '@monorepo/ui-shares';
// import {
//   fetchListAddressConfig,
//   getListAddressDeliveryApi,
// } from '@monorepo/function-shares';
import dynamic from 'next/dynamic';

const EditAddress = (props) => {
  const { match } = props;
  const id = match?.params?.addressId;
  console.log(props);
  return (
    <TransitionLayout title={'Sửa địa chỉ'}>
      <Header title="Sửa địa chỉ" />
      <LocationScreen id={id} type={'edit'} />
    </TransitionLayout>
  );
};

// export const getStaticPaths = async () => {
//   const listAddress = await fetchListAddressConfig();
//   const paths = listAddress.map((item) => ({
//     params: { id: item.id.toString() },
//   }));

//   return { paths, fallback: true };
// };

// export const getStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     return { props: { id } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };
export default dynamic(() => Promise.resolve(withIonicPage(EditAddress)), {
  ssr: false,
});
