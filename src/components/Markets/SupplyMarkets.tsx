import React from 'react';
import { Avatar, Button, Modal, Col, Card, Row, Space, Switch,  } from 'antd';
import { Provider, useStore } from 'react-redux';


const { info } = Modal;

const wsxMarketSelected = () => {

    info({
        title: "About WSX Token",
        okText: "Return",
        centered: false,
        closeIcon: true,
        maskClosable: true,
        content: <SXNetworkCard />,
    })
}

const SXNetworkCardTitle = () => {
    return <><div><img></img> Wrapped SX Token</div></>;
}

const enableWSXLending = () => {
    // This is where actions go for the erc20 token (enable useage)
    alert('You can now borrow your WSX!');
}

const SXNetworkCard = () => {
    return <>
        <div style={{ display: "flex", alignItems: "center"}}>
        {/* SX Token IMG */}
            <Row>
                <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png' alt='WSX Token'></img>
            </Row>
        </div>
            <Switch checkedChildren="  Supply  " unCheckedChildren="  Withdraw  " defaultChecked/>
            <Space />
            
            <Button onClick={enableWSXLending}>
                Enable SX Token 
            </Button>

            <Row>
                <h4>Your Wallet Balance: </h4>
                <h4> 0 WSX </h4>
            </Row>
        
    </>;
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