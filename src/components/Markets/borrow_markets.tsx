import React from 'react';
import { Avatar, Button, List, Col, Card, Row } from 'antd';

const borrowMarkets = [
    {
        title: "USDC",
        description: "Fully backed United States Dollar, on-chain",

    }
]


const BorrowMarkets = () => <>{
<Col span={12}>
    <Card bordered={true} title="Borrow Markets">
        <Row>
            <List itemLayout='horizontal'  
            header={
                <Row>
                
                    <h4>
                        Asset
                    </h4>
                    <h4>
                        APY
                    </h4>
                    <h4>
                        Wallet
                    </h4>
                    <h4>
                        Liquidity
                    </h4>
                
                </Row>
            }
            dataSource={borrowMarkets}
            renderItem={(item) => 
            <List.Item>
                <List.Item.Meta 
                title={ <h4>{item.title}</h4>} 
                description={<p>
                    {item.description}
                    </p>}/>
            </List.Item>}
            />
        </Row>
    </Card>
</Col>

}</>

export default BorrowMarkets