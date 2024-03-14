import React, { useState } from "react";
import { Menu, MenuProps, Col, Row, Space, Button, Drawer } from "antd";
import WalletCard from "../WalletCard/WalletCard";
import { useBreakPoint } from "../../hooks/UseBreakPoint";

const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "dashboard",
  },
  {
    label: (
      <a
        href="https://snapshot.org/#/sportx.eth"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vote
      </a>
    ),
    key: "vote",
  },
];

const menuStyle: React.CSSProperties = {
  backgroundColor: "#2566D8",
  lineHeight: "64px",
};

const TopNavigationBar: React.FC = () => {
  const [current, setCurrent] = useState<string>("dashboard");
  const screens = useBreakPoint();
  const [visible, setVisible] = useState<boolean>(false);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Row align={"middle"} justify={"space-around"}>
      <Col span={6}>
        <h2>
          <a href="https://sx.technology/" style={{ color: "#FFFFFF" }}>
            DegenLend
          </a>
        </h2>
      </Col>
      {screens === "xs" ? (
        <>
          <Col span={12} style={{ textAlign: "right" }}>
            <Button type="primary" onClick={showDrawer}>
              Menu
            </Button>
          </Col>
          <Drawer
            title="Menu"
            placement="left"
            closable={true}
            onClose={onClose}
            open={visible}
          >
            <Menu
              onClick={onClick}
              theme="dark"
              selectedKeys={[current]}
              mode="vertical"
              defaultSelectedKeys={["2"]}
              style={menuStyle}
              items={items}
            ></Menu>
          </Drawer>
        </>
      ) : (
        <Col span={12}>
          <Menu
            onClick={onClick}
            theme="dark"
            selectedKeys={[current]}
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={menuStyle}
            items={items}
          ></Menu>
        </Col>
      )}
      <WalletCard />
    </Row>
  );
};

export default TopNavigationBar;
