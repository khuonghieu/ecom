import React from "react";
import { Row, Spin } from "antd";
import Product from "./Product";
import useProducts from "./hooks/useProducts";

function Home() {
  const { data, isLoading } = useProducts();
  if (isLoading) {
    return <Spin />;
  }
  return (
    <div className="site-layout-content">
      <Row gutter={16}>
        {data?.map((item) => (
          <Product id={item.id} name={item.name} detail={item.detail} />
        ))}
      </Row>
    </div>
  );
}

export default Home;
