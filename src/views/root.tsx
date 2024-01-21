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
import TopNavigationBar from '../components/Header/TopNavigationBar';


const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 75,
  lineHeight: '64px',
  backgroundColor: '#2566D8',
  display: 'flex',
  alignItems: 'center',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
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
  color: '#fff',
  backgroundColor: 'lightgrey',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  // width: 'calc(95% - 8px)',
  // maxWidth: 'calc(95% - 8px)',
  paddingInline: 50,

};

const Root: React.FC = () => <>
  <Header style={headerStyle}>
    <TopNavigationBar />
  </Header>
  <Layout style={layoutStyle}>
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
  </Layout>
  <Footer style={footerStyle}>
    Created by Prediction Labs Team
  </Footer>
</>

export default Root;