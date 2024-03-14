import React, { useState, useEffect } from 'react';
import { Row, Divider, Button, Col, Statistic, Segmented, Tooltip, Space, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/Store';

// Action Imports
import { borrowWSX, repayWSX } from '../../../feature/slices/WSXSlice';

import wsxtoken from '../../../assets/sx_coin_token.png';
import { EMPTY_ADDRESS } from '../../../utils/constants';

const BorrowWSXCardContent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    let WSX = new Intl.NumberFormat('en-US');
    const wsxBalance = useSelector((state: RootState) => state.WSX.wsxBalance);
    const borrowRate = 0;
    let borrowAmount = 0;
    let repayAmount: number = 0;
    const myWalletAddress = EMPTY_ADDRESS

    const [isBorrowingEnabled, setisBorrowingEnabled] = useState<boolean>(false);
    const [isBorrow, setSupply] = useState<boolean>(true);


    //Hooks
    const borrowWSXHook = () => {
        dispatch(borrowWSX);
    }

    const repayWSXHook = () => {
        dispatch(repayWSX);
    }

    // Components
    function Content({ isBorrow }: { isBorrow: boolean})
    {
        if (isBorrow) return (
            <div>
                <Row gutter={4}>
                    <p>To supply, withdraw, or repay your USDC, you need to enable it first</p>
                </Row>
                <Statistic title="Borrow Rate" value={borrowRate} precision={2} suffix="%" />

                <Space direction='vertical' style={{ width: '100%' }}>
                    <InputNumber 
                            style={{ width: '75%' }}
                            stringMode
                            id='borrowAmount'
                            placeholder='Enter an Amount'
                            size='large'
                            onChange={(value) => { borrowAmount = value! as number}}
                            prefix={<img width="20" height="20" src={wsxtoken} alt='USDC Token' />}
                            variant='outlined'
                            controls={false}
                    />
                    <Button
                            type='primary'
                            size='large'
                            onClick={borrowWSXHook}>Borrow WSX</Button>
                </Space>
            </div>
        )
        else return (
            <div>
                <Row gutter={4}>
                    <p>To supply, withdraw, or repay your USDC, you need to enable it first</p>
                </Row>
                    <Space direction='vertical' style={{width: '100%'}}>
                        <InputNumber 
                            style={{ width: '75%' }}
                            size='large'
                            stringMode
                            id='repayAmount'
                            onChange={(value) => { repayAmount = value! as number }}
                            prefix={<img width='20' height='20' src={wsxtoken} alt='wSX Token' />}
                            placeholder='Enter an Amount'
                            variant='outlined'
                            controls={false}
                        />
                        <Button
                            type='primary'
                            size='large'
                            onClick={repayWSXHook}> Repay WSX</Button>
                    </Space>
                
            </div>
        )
    }

    useEffect(() => {

    })


    return (
        <div style={{ textAlign: "center" }}>
            <Row justify="center" align="middle" style={{ marginBottom: 20 }}>
                <Col>
                    <img width="64" height="64" src={wsxtoken} alt='USDC Token' />
                </Col>
            </Row>
            <Divider> Details </Divider>
            <Row justify="center" gutter={[16, 16]} style={{ marginBottom: 20 }}>
                <Col>
                    <Tooltip title="Borrow or Repay your USDC token">
                        <Segmented
                            defaultValue="Borrow"
                            options={['Borrow', 'Repay']}
                            onChange={() => { setSupply(!isBorrow) }}
                        />
                    </Tooltip>
                </Col>
            </Row>
            <Row justify='center' gutter={[16, 16]}>
                <Col>
                    <Content isBorrow={isBorrow} />
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

export default BorrowWSXCardContent