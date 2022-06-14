import { TransitionLayout, Header, Cart } from '@monorepo/ui-shares';

export interface ProductProps {
  id: number;
  data: any;
}

function Products(props: ProductProps) {
  const { data } = props;
  return (
    <div>
      <TransitionLayout
        title="Tất cả sản phẩm"
        description="Mua mọi thứ"
        photo=""
      >
        <>
          <Header title={'Giỏ hàng'} />
          <Cart />
        </>
      </TransitionLayout>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = [];
  return { props: { data } };
}

export default Products;
