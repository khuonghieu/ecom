import React from "react";
import { Card, Row, Button } from "antd";
import useUpdateCart from "./hooks/useUpdateCart";
import useCart from "./hooks/useCart";

function CartItem({ id, name, quantity }) {
  const { refetch } = useCart();
  const { mutate } = useUpdateCart(refetch);

  return (
    <Card style={{ width: 500, marginBottom: 16, marginTop: 16 }}>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Quantity:</strong> {quantity}
      </p>
      <Row>
        <Button
          onClick={() => mutate({ id, quantity: 1 })}
          type="primary"
          style={{ marginRight: 16 }}
        >
          +
        </Button>
        <Button
          onClick={() => mutate({ id, quantity: -1 })}
          type="default"
          style={{ marginRight: 16 }}
        >
          -
        </Button>
        <Button
          onClick={() => mutate({ id, quantity: -quantity })}
          type="primary"
          danger
          style={{ marginRight: 16 }}
        >
          Remove
        </Button>
      </Row>
    </Card>
  );
}

export default CartItem;
