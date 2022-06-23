import {
  TransitionLayout,
  Header,
  FillNewAddressScreen,
  withIonicPage
} from '@monorepo/ui-shares';
import dynamic from 'next/dynamic';

export interface FillAddressProps {
  id?: number;
}

function FillAddressScreen(props: FillAddressProps) {
  return (
    <div>
      <TransitionLayout
        title="Nhập địa chỉ của bạn"
        description="Địa chỉ giao hàng"
        photo=""
      >
        <Header title={'Nhập địa chỉ của bạn'} />
        <FillNewAddressScreen />
      </TransitionLayout>
    </div>
  );
}

// export default FillAddressScreen
export default dynamic(() => Promise.resolve(withIonicPage(FillAddressScreen)), {
  ssr: false,
});
