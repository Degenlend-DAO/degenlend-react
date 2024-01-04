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

    <Col span={12}>
        <Card bordered={true} title="Supply Markets">
        <Row>
        <List 
            header={
            <Row>
            <h4> Asset </h4>
            <h4> APY </h4>
            <h4> Wallet </h4>
            <h4> Collateral </h4>
            </Row>}
            itemLayout='horizontal'
            dataSource={supplyMarkets}
            renderItem={(item) => <List.Item>
                <List.Item.Meta title={ <h4>{item.title}</h4> } description={ <p>{item.description}</p> } />

            </List.Item>}
        />
        </Row>
        </Card>
    </Col>
    </div>
}</>

export default SupplyMarkets