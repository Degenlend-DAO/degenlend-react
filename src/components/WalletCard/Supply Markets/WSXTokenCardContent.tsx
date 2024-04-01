import React, { useEffect, useState } from 'react';
import { Flex, Card, Row, Radio, Divider, Button, Col, Form, Statistic, Segmented, Input, Tooltip, Space, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/Store';
import { approveWSX, supplyWSX, updateSupplyBalance, updateWSXBalance, updatewsxsupplyRate, withdrawWSX } from '../../../feature/slices/WSXSlice';
import { UnknownAction } from '@reduxjs/toolkit';
import { InfoCircleOutlined } from '@ant-design/icons';
import { address } from '../../../utils/web3';
import sxtoken from '../../../assets/sx_coin_token.png';
import { WSX } from '../../../utils/constants';

const SupplyWSXCardContent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    // View Objects
    const wsxBalance = useSelector((state: RootState) => state.WSX.wsxBalance);
    const supplyRate = useSelector((state: RootState) => state.WSX.supplyRate);;
    const supplyBalance = useSelector((state: RootState) => state.WSX.supplyBalance);
    const myWalletAddress = useSelector((state: RootState) => state.metaMask.address);
    
    /// Variable Objects
    let approveAmount: number = 0;
    let depositAmount: number = 0;
    let withdrawAmount: number = 0;
    
    /// State Objects
    const [isLendingEnabled, setIsLendingEnabled] = useState<boolean>(false);
    const [isSupply, setSupply] = useState<boolean>(true);

    /// Hoooks
    const enableWSXHook = () => {
        setIsLendingEnabled(true);
    }
    
    const approveWSXHook = () => {
        dispatch(approveWSX({ amount: approveAmount, addressToApprove: myWalletAddress }));
    }

    const depositWSXHook = () => {
        dispatch(supplyWSX(depositAmount));
    }

    const withdrawWSXHook = () => {
        dispatch(withdrawWSX(withdrawAmount));
    }

    // Components
    function Content({ isSupply }: { isSupply: boolean }) {
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
                        prefix={<img width="20" height="20" src={sxtoken} alt='WSX Token' />}
                        placeholder="Enter an amount"
                        controls={false}
                    />
                    <Button type="primary" size='large' onClick={depositWSXHook}>Deposit</Button>
                </Space>
                <p>Currently supplying {WSX.format(supplyBalance)} degenwSX</p>
            </div>
        )
        else return (
            <div>
                <p>To supply, withdraw, or repay your Wrapped SX, you need to enable it first</p>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <InputNumber
                        style={{ width: '100%' }}
                        stringMode
                        size="large"
                        onChange={(value) => { withdrawAmount = value! as number }}
                        prefix={<img width="20" height="20" src={sxtoken} alt='WSX Token' />}
                        placeholder="Enter an amount"
                        controls={false}
                    />
                    <Button type="primary" size='large' onClick={withdrawWSXHook}>Withdraw</Button>
                </Space>
            </div>
        );
    }

    // Effects
    useEffect(() => {

        dispatch(updateSupplyBalance());
        dispatch(updatewsxsupplyRate());
        dispatch(updateWSXBalance());
        
     })

    return (
        <div style={{ textAlign: "center" }}>
            <Row justify="center" align="middle" style={{ marginBottom: 20 }}>
                <Col>
                    <img src={sxtoken} alt='WSX Token' />
                </Col>
            </Row>
            <Divider>Details</Divider>
            <Row justify="center" gutter={[16, 16]} style={{ marginBottom: 20 }}>
                <Col>
                    <Segmented
                        defaultValue="Supply"
                        options={['Supply', 'Withdraw']}
                        onChange={() => { setSupply(!isSupply) }}
                    />
                </Col>
            </Row>
            <Row justify="center" gutter={[16, 16]}>
                <Col>
                    <Content isSupply={isSupply} />
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <p>Wallet Balance: {WSX.format(wsxBalance)} wSX</p>
                </Col>
            </Row>
        </div>
    );
}

export default SupplyWSXCardContent;