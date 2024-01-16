import React from 'react';
import { Avatar, Button, List, Col, Card, Row } from 'antd';

const supplyMarkets = [
    {
        title: "SX Token",
        description: "The token for SX blockchain",
        apy: "5%",
        walletBalance: "0",
        liquidity: ""
    },
    // {
    //     title: "AthleteX Token",
    //     description: "The token for AthleteX Markets",
    //     apy: "8.7%",
    //     walletBalance: "",
    //     liquidity: ""
    // }
]

const loadItemDetails = () => {
    alert('do better!');
}

const SupplyMarkets = () => <>{

    <div className="column">

    <Col>
        <Card bordered={true} title="Supply Markets">
            <p>These markets are available for you to borrow against</p>
        </Card>
    </Col>
    </div>
}</>

export default SupplyMarkets