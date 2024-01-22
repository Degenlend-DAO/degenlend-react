import React from 'react';
import { Avatar, Button, Modal, Col, Card, Row, Space, Switch,  } from 'antd';
import SXNetworkCardContent from '../WalletCard/SXNetworkCardContent';
import { Provider, useStore } from 'react-redux';


const { info } = Modal;

const wsxMarketSelected = () => {

    info({
        title: "About WSX Token",
        okText: "Return",
        centered: true,
        closeIcon: true,
        maskClosable: true,
        width: 600,
        
        content: <SXNetworkCardContent />,
    })
}

const SupplyMarkets:React.FC = () => <>{

    <div className="column">
        <Col>
            <Card bordered={true} title="Supply Markets" style={{ width: 350 }} onClick={wsxMarketSelected}>
                <Card hoverable>
                        <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png'></img>
                </Card>
            </Card>
        </Col>
    </div>
}</>

export default SupplyMarkets