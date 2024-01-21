import React from 'react'

// Ethereum
import { ethers } from "ethers";

// Contracts
import Comptroller from '../contracts/Comptroller.json'
import InterestRateModel from '../contracts/JumpRateModelV2.json'
import Maximillion from '../contracts/Maximillion.json'
import PriceOracle from '../contracts/PriceOracle.json'


// Design Library
import { Layout, Button, Row, Col, Space } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'


// Components
import Dashboard from '../components/Dashboard/Dashboard';
import BorrowMarkets from '../components/Markets/BorrowMarkets';
import SupplyMarkets from '../components/Markets/SupplyMarkets';
import TopNavigationBar from '../components/Header/topNavigationBar';


const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  height: 100,
  backgroundColor: '#2566D8',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#F5F5F5',
  alignItems: 'center',
  paddingTop: 20,
  paddingBottom: 20,
  paddingInline: 80,
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000000',
  backgroundColor: 'lightgrey',
};

const Root: React.FC = () => <>
  <Layout>
    <Header style={headerStyle}>
      <TopNavigationBar />
    </Header>
    <Content style={contentStyle}>
      <Dashboard />
      <Row gutter={16}>
        <Col span={12}>
          <SupplyMarkets />
        </Col>
        <Col span={12}>
          <BorrowMarkets />
        </Col>
      </Row>
    </Content>
    <Footer style={footerStyle}>
      Created by Prediction Labs Team
    </Footer>
  </Layout>
</>

export default Root;