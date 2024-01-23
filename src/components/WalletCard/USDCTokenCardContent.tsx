import React, { useState, useEffect } from 'react';
import { Card, Row, Switch, Divider, Button, Col, Skeleton } from 'antd';


const enableUSDCLending = () => {
    alert('you can now borrow your USDC!');
}

const USDCCardContent: React.FC = () => {
    return <div>
        <div style={{ display: "flex", justifyItems: "center" }}>
            <Col offset={11}>
                <img width="64" height="64" src='https://tokensinvaders.com/wp-content/uploads/2021/02/usd-coin-usdc-logo-1024x1024.png' alt='USDC Token'></img>
            </Col>
        </div>

        <Divider> Details </Divider>
        <Row gutter={4}>
            <p>To supply, withdraw or repay your USDC, you need to enable it first</p>
        </Row>

        <Row gutter={6}>
            <Col span={6}>

            </Col>
            <Col span={6}>
            
            </Col>
        </Row>
    </div>
}

export default USDCCardContent;