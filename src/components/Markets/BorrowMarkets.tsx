import React from 'react';
import { Avatar, Button, List, Col, Card, Row } from 'antd';

const borrowMarkets = [
    {
        title: "USDC",
        description: "Fully backed United States Dollar, on-chain",

    }
]


const BorrowMarkets = () => <>{

    <Card bordered={true} title="Borrow Markets">
        <p> These markets are available for you to borrow against</p>
    </Card>

}</>

export default BorrowMarkets