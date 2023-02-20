import React, { useState } from "react";
import { Menu, Layout, Row, Avatar } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import Cart from "./Cart";

const { Header, Content } = Layout;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Cart",
      key: "cart",
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header>
          <Row>
            <div style={{ marginRight: 24 }}>
              <Avatar
                shape="square"
                style={{ backgroundColor: "green" }}
                size={40}
              >
                Thai
              </Avatar>
            </div>
            <Menu
              onClick={onClick}
              theme="dark"
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Row>
        </Header>
        <Content style={{ padding: "0 50px", height: "100%" }}>
          {current === "home" && <Home />}
          {current === "cart" && <Cart />}
        </Content>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
