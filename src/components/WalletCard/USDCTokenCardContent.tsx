import React, { useState, useEffect } from 'react';
import { Card, Row, Flex, Radio, Form, Divider, Button, Col, Statistic, Skeleton, Segmented } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';


const USDCCardContent: React.FC = () => {

    const dispatch = useDispatch();
    let isSupply = false;

    const borrowAPY = useSelector((state:RootState) => state.borrowUSDC.borrowAPY);
    const usdcBalance = useSelector((state:RootState) => state.borrowUSDC.usdcBalance);

    const enableUSDCLending = () => {
        
    }
    

    function SegmentedContent({ isSupply }: {isSupply: boolean}) {
            let content = <div></div>;
            if (isSupply) {
                content = <Statistic title="Borrow APY" value={borrowAPY} precision={2} suffix="%" />
            }

            return content;
        }

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
        <Flex vertical align='center'>
            <Segmented
                    defaultValue="center"
                    style={{ marginBottom: 8 }}
                    onChange={() => {isSupply = !isSupply}}
                    options={['Supply', 'Withdraw']}
                    />

                    <SegmentedContent isSupply={isSupply} />

            <Button type="primary" size={'large'} onClick={enableUSDCLending}>
                Enable USDC
            </Button>

            <p>
                Wallet Balance: {usdcBalance} USDC
            </p>
        </Flex>
    </div>
}

export default USDCCardContent;