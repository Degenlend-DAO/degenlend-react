import React, { useEffect, useState } from 'react';
import { Flex, Card, Row, Radio, Divider, Button, Col, Form, Statistic, Segmented, Input, Tooltip, Space, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/Store';
import usdctoken from '../../../assets/usd-coin-usdc-logo-64x64.png'


const SupplyUSDCCardContent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();


    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    let WSX = new Intl.NumberFormat('en-US');
    const [isBorrowingEnabled, setisBorrowingEnabled] = useState<boolean>(false);
    const usdcBalance = useSelector((state: RootState) => state.USDC.usdcBalance);
    const supplyBalance = 0;
    const supplyRate = 0;
    let depositAmount: number = 0;
    let withdrawAmount: number = 0;

    const [isSupply, setSupply] = useState<boolean>(true);

    // Hooks
    const depositUSDCHook = () => {}

    const withdrawUSDCHook = () => {}



    // Components
    function Content({isSupply}: {isSupply: boolean}) {
        if (isSupply) return (
            <div>
                <Statistic
                    title="Supply Rate"
                    value={supplyRate}
                    precision={6}
                    suffix="%"
                />
                <Space direction="vertical" style={{ width: '100%' }}>
                    <InputNumber
                        style={{ width: '100%' }}
                        size="large"
                        stringMode
                        onChange={(value) => { depositAmount = value! as number }}
                        prefix={<img width="20" height="20" src={usdctoken} alt='USDC Token' />}
                        placeholder="Enter an amount"
                        controls={false}
                    />
                    <Button type="primary" size='large' onClick={depositUSDCHook}>Deposit</Button>
                </Space>
                <p>Currently supplying {WSX.format(supplyBalance)} degenwSX</p>
            </div>
        )
        else return (
            <div>
                <p>To supply, withdraw, or repay your USDC, you need to enable it first</p>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <InputNumber
                        style={{ width: '100%' }}
                        stringMode
                        size="large"
                        onChange={(value) => { withdrawAmount = value! as number }}
                        prefix={<img width="20" height="20" src={usdctoken} alt='USDC Token' />}
                        placeholder="Enter an amount"
                        controls={false}
                    />
                    <Button type="primary" size='large' onClick={withdrawUSDCHook}>Withdraw</Button>
                </Space>
            </div>
        )
    }

    // Effects
    useEffect(() => {})

    return (
        <div style={{ textAlign: "center"}}>
            <Row justify="center" align="middle" style={{ marginBottom: 20 }}>
                <Col>
                    <img src={usdctoken} alt='USDC Token'></img>
                </Col>
            </Row>
            <Divider>Details</Divider>
            <Row justify='center' gutter={[16, 16]} style={{ marginBottom: 20 }}>
                <Col>
                    <Segmented
                        defaultValue='Supply'
                        options={['Supply', 'Withdraw']}
                        onChange={() => { setSupply(!isSupply) }} />
                </Col>
            </Row>
            <Row justify="center" gutter={[16, 16]}>
                <Col>
                    <Content isSupply={isSupply} />
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                <p>Wallet Balance: {USDollar.format(usdcBalance)} USDC</p>
                </Col>
            </Row>
        </div>
    );
}

export default SupplyUSDCCardContent;