import React from "react";
import { Card, Collapse, Button } from "antd";
import useAddToCart from "./hooks/useAddToCart";

const { Meta } = Card;
const { Panel } = Collapse;
function Product({ id, name, detail }) {
  const { mutate } = useAddToCart();

  return (
    <Card hoverable style={{ width: 250, margin: 16 }}>
      <Meta title={name} />
      <Collapse style={{ marginTop: 12, marginBottom: 12 }}>
        <Panel header="Product detail" key="1">
          <p>{detail}</p>
        </Panel>
      </Collapse>
      <Button onClick={() => mutate(id)} type="primary">
        Add to cart
      </Button>
    </Card>
  );
}

export default Product;
