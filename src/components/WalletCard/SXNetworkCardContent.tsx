import React, { useState, useEffect } from 'react';
import { Card, Row, Switch, Space, Button, Col, Skeleton } from 'antd';
import { useDispatch } from 'react-redux';


const SXNetworkCardTitle = () => {
    return <><div><img></img> Wrapped SX Token</div></>;
}

const enableWSXLending = () => {
    // This is where actions go for the erc20 token (enable useage)
    alert('You can now borrow your WSX!');
}

const SXNetworkCard = () => {
    return <>
    </>;
}

const SXNetworkCardContent: React.FC = () => {
    return <div>
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
        
    </div>
}

export default SXNetworkCardContent;