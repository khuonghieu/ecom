import React, { useEffect, useState } from "react";
import { Button, Spin } from "antd";
import CartItem from "./CartItem";
import useCart from "./hooks/useCart";
import useCheckout from "./hooks/useCheckout";
import useClearCart from "./hooks/useClearCart";

function Cart() {
  const [successPurchase, setSuccessPurchase] = useState(false);
  const { data, isLoading, isRefetching, refetch, remove } = useCart();
  const { mutate: checkout } = useCheckout(() => {
    refetch();
    setSuccessPurchase(true);
  });
  const { mutate: clearCart } = useClearCart(() => {
    refetch();
  });

  useEffect(() => {
    remove();
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }
  if (successPurchase) {
    return <div>Purchased</div>;
  }

  if (!data || !Object.keys(data).length) {
    return <div>Empty cart</div>;
  }
  return (
    <Spin spinning={isRefetching}>
      <div style={{ padding: 12 }}>
        {Object.keys(data).map((e) => (
          <CartItem name={data[e].name} quantity={data[e].quantity} id={e} />
        ))}
        {Object.keys(data).length > 0 && (
          <Button onClick={clearCart} type="primary" danger>
            Clear cart
          </Button>
        )}
        {Object.keys(data).length > 0 && (
          <Button onClick={checkout} type="primary" style={{ marginLeft: 16 }}>
            Checkout
          </Button>
        )}
      </div>
    </Spin>
  );
}

export default Cart;
