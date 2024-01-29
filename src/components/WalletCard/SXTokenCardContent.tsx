import React, { useEffect, useState } from 'react';
import { Flex, Card, Row, Radio, Divider, Button, Col, Form, Statistic, Segmented } from 'antd';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { approveWSX, updateWSXBalance, updatewsxSupplyAPY } from '../../feature/supply/WSXSlice';
import { UnknownAction } from '@reduxjs/toolkit';

const SXNetworkCardContent: React.FC = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const wsxBalance = useSelector((state:RootState) => state.WSX.wsxBalance);
    const supplyAPY = useSelector((state:RootState) => state.WSX.supplyAPY);;
    let isSupply = false;
    const enableWSXLending = () => {
        dispatch(approveWSX() as unknown as UnknownAction);
    }

    useEffect(() => {
        dispatch( updatewsxSupplyAPY() as unknown as UnknownAction );
        dispatch( updateWSXBalance() as unknown as UnknownAction);
    })

    return (<div>
        <div style={{ display: "flex", justifyItems: "center"}}>
            <Col offset={11}>
                <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png' alt='WSX Token'></img>
            </Col>
        </div>

        <Divider> Details </Divider>
        <Row gutter={4}>
            <p>To supply, withdraw, or repay your Wrapped SX, you need to enable it first</p>
        </Row>
        <Flex vertical align='center'>
                        <Segmented
                                defaultValue="center"
                                style={{ marginBottom: 8 }}
                                onChange={() => {isSupply = !isSupply}}
                                options={['Supply', 'Withdraw']}
                                />
                        <Statistic
                        title="Supply APY"
                        value={supplyAPY}
                        precision={2}
                        suffix="%"
                        />

                <Button type="primary" size={'large'} onClick={enableWSXLending}>
                    Enable WSX
                </Button>
                <p>
                    Wallet Balance: {wsxBalance} WSX
                </p>
        </Flex>
    </div>
    );
}

export default SXNetworkCardContent;