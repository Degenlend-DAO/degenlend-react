import React from "react";

// Ethereum
import { ethers } from "ethers";

// Contracts
import Comptroller from "../contracts/Comptroller.json";
import InterestRateModel from "../contracts/JumpRateModelV2.json";
import Maximillion from "../contracts/Maximillion.json";
import PriceOracle from "../contracts/PriceOracle.json";

// Design Library
import { Layout, Button, Row, Col, Space } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

// Components
import BorrowMarkets from "../components/Markets/BorrowMarkets";
import SupplyMarkets from "../components/Markets/SupplyMarkets";
import TopNavigationBar from "../components/Header/TopNavigationBar";
import Dashboard from "../components/Dashboard/dashboard";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  zIndex: 1,
  width: "100%",
  height: "15%",
  backgroundColor: "#2566D8",
};

const contentStyle: React.CSSProperties = {
  zIndex: 1,
  textAlign: "center",
  minHeight: "100vh",
  color: "#fff",
  backgroundColor: "#F5F5F5",
  position: "relative",
  alignItems: "center",
  paddingTop: 20,
  paddingBottom: 20,
  paddingInline: 80,
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000000",
  backgroundColor: "lightgrey",
};

const Root: React.FC = () => (
  <>
    <Layout>
      <Header style={headerStyle}>
        <TopNavigationBar />
      </Header>
      <Content style={contentStyle}>
        <Dashboard />
        <Row gutter={16}>
          <Col span={24} xs={12}>
            <SupplyMarkets />
          </Col>
          <Col span={24} xs={12}>
            <BorrowMarkets />
          </Col>
        </Row>
      </Content>
      <Footer style={footerStyle}>Created by Prediction Labs Team</Footer>
    </Layout>
  </>
);

export default Root;
