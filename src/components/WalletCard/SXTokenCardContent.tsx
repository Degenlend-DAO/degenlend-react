import React, { useState, useEffect } from 'react';
import { Card, Row, Switch, Divider, Button, Col, Skeleton } from 'antd';
import { useDispatch } from 'react-redux';

const enableWSXLending = () => {
    // This is where actions go for the erc20 token (enable useage)
    alert('You can now borrow your WSX!');
}

const SXNetworkCardContent: React.FC = () => {
    return <div>
        <div style={{ display: "flex", justifyItems: "center"}}>
            <Col offset={11}>
                <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png' alt='WSX Token'></img>
            </Col>
        </div>

        <Divider> Details </Divider>
        <Row gutter={4}>
            <p>To supply, withdraw, or repay your Wrapped SX, you need to enable it first</p>
        </Row>

        <Row gutter={6}>
            <Col span={6}>
                <Card style={{ width: 200, height: 190 }}>
                <Switch checkedChildren="  Supply  " unCheckedChildren="  Withdraw  " defaultChecked/>
                <p> Supply APY: 5.46% </p>
                <Button onClick={enableWSXLending}>
                    Enable SX Token 
                </Button>
                </Card>            
            </Col>
            <Col span={6} offset={6}>
                <Card style={{ width: 200, height: 190}}>
                    <h4>Your Wallet Balance: </h4>
                    <h4> 0 WSX </h4>
                </Card>
            </Col>
        </Row>
        
    </div>
}

export default SXNetworkCardContent;