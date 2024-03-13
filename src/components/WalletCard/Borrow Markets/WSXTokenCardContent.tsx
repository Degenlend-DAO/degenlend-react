import React, { useState, useEffect } from 'react';
import { Row, Divider, Button, Col, Statistic, Segmented, Tooltip, Space, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/Store';
import { UnknownAction } from '@reduxjs/toolkit';
import { approveUSDC, borrowUSDC, repayUSDC, updateUSDCBalance, updateBorrowBalance, updateusdcBorrowRate } from '../../../feature/borrow/USDCSlice';
import { InfoCircleOutlined } from '@ant-design/icons';

import wsxtoken from '../../../assets/sx_coin_token.png';

const BorrowWSXCardContent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    let WSX = new Intl.NumberFormat('en-US');
    const wsxBalance = useSelector((state: RootState) => state.WSX.wsxBalance);

    const [isBorrowingEnabled, setisBorrowingEnabled] = useState<boolean>(false);
    const [isBorrow, setSupply] = useState<boolean>(true);


    function Content({ isBorrow }: { isBorrow: boolean})
    {
        if (isBorrow) return (
            <div>
                <Row gutter={4}>
                    <p>

                    </p>
                </Row>
            </div>
        )
        else return (
            <div>

            </div>
        )
    }


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