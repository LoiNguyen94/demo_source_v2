import { TransitionLayout, Header, LocationScreen } from '@monorepo/ui-shares';
import {
  fetchListAddressConfig,
  getListAddressDeliveryApi,
} from '@monorepo/function-shares';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const EditAddress = (props) => {
  const { id } = props;
  const router = useRouter();
  return (
    <TransitionLayout title={'Sửa địa chỉ'}>
      <Header title="Sửa địa chỉ" />
      <LocationScreen id={id} type={'edit'} />
    </TransitionLayout>
  );
};

export const getStaticPaths = async () => {
  const listAddress = await fetchListAddressConfig();
  const paths = listAddress.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    // const res = await fetch(
    //   `http://localhost:5001/v2/customer/address/detail/${id}`,
    //   {
    //     headers: new Headers({
    //       Authorization:
    //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1tN2JqajMzSzl3cWJEdE9EelFBIiwiaW50ZXJuYWxJZCI6MTIyNDI0LCJwaG9uZSI6IjA4MzUxNTY0ODIiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NTQ0ODc2MjUsImV4cCI6MTY1NzA3OTYyNSwiaXNzIjoiTWlvYXBwIn0.HUqZS1Q6n24vpKBM8QIBzYLT1xcsa-YVjOJ5fwEWV5o',
    //     }),
    //   }
    // );
    // const d = await res.json();
    // const a = d?.data;
    return { props: { id } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
export default dynamic(() => Promise.resolve(EditAddress), { ssr: false });
