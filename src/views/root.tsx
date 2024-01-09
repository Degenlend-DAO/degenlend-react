import React from 'react'
import { Layout, Button, Row, Col, Space } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

import Dashboard from '../components/Dashboard/dashboard';
import BorrowMarkets from '../components/Markets/borrow_markets';
import SupplyMarkets from '../components/Markets/supply_markets';
import TopNavigationBar from '../components/Header/topNavigationBar';


const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 175,
    lineHeight: '64px',
    backgroundColor: '#021529',
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
        <Col span={6}>
        <h2> <a href="https://sx.technology/">DegenLend</a></h2>
        </Col>
          <TopNavigationBar />
        <Col span={6}>
        <Button type="default" shape="round" icon={<CaretRightOutlined />} size="large">
            Connect Wallet
          </Button>

        </Col>
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
        Created by AthleteX Team
      </Footer>
  </>

  export default Root;