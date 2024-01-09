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
    height: 125,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    display: 'flex',
    alignItems: 'center',
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
    alignItems: 'center',

    paddingInline: 150,

  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    // width: 'calc(95% - 8px)',
    // maxWidth: 'calc(95% - 8px)',
    paddingInline: 50,

  };  

  const Root: React.FC = () => <>
      <Layout style={layoutStyle}>
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
      <Content style={contentStyle}>
      <Dashboard />
        <Space />
        <Row>
        <Col span={12}>
            <BorrowMarkets />
        </Col>
        <Col span={12}>
            <SupplyMarkets />
        </Col>
        </Row>
      </Content>
      <Footer style={footerStyle}>
        Created with love by AthleteX Team
      </Footer>
    </Layout>
  </>

  export default Root;