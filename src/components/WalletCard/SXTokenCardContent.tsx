import React, { useEffect, useState } from 'react';
import { Flex, Card, Row, Radio, Divider, Button, Col, Form, Statistic, Segmented, Input } from 'antd';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { approveWSX, updateWSXBalance, updatewsxSupplyAPY, updateSupplyBalance, supplyWSX, withdrawWSX } from '../../feature/supply/WSXSlice';
import { UnknownAction } from '@reduxjs/toolkit';

const SXNetworkCardContent: React.FC = () => {
    const dispatch = useDispatch();

    //variable declarations    
    const wsxBalance = useSelector((state:RootState) => state.WSX.wsxBalance);
    const supplyAPY = useSelector((state:RootState) => state.WSX.supplyAPY);;
    const supplyBalance = useSelector((state:RootState) => state.WSX.supplyBalance);
    const myWalletAddress = useSelector((state: RootState) => state.metaMask.address);
    const [isSupply, setSupply] = useState(true);


    // function declarations
    const enableWSXHook = () => {
        dispatch(approveWSX(myWalletAddress) as unknown as UnknownAction);
    }

    const supplyWSXHook = () => {
        dispatch(supplyWSX(myWalletAddress) as unknown as UnknownAction);
    }

    const withdrawWSXHook = () => {
        dispatch(withdrawWSX(myWalletAddress) as unknown as UnknownAction);
    }

    useEffect(() => {
        dispatch(updatewsxSupplyAPY() as unknown as UnknownAction );
        dispatch(updateWSXBalance() as unknown as UnknownAction);
        dispatch(updateSupplyBalance() as unknown as UnknownAction);
    })

    // content

    function Content({ flag }: {flag: boolean}) {

        if (flag) return (
        
        <div>
        <Statistic
        title="Supply APY"
        value={supplyAPY}
        precision={2}
        suffix="%"
        />

        <Button type="primary" size={'large'} onClick={enableWSXHook}>
                    Enable WSX
        </Button>
        <p>Currently supplying {supplyBalance} SX</p>
        </div>)
        else return (
        <div>
            <Row gutter={4}>
                <p>To supply, withdraw, or repay your Wrapped SX, you need to enable it first</p>
            </Row>
                <Statistic
                    title="Borrow APY"
                    value= {0}
                    precision={2}
                    suffix="%"
                />
            <Input placeholder="Enter withdraw amount" variant="borderless" />
            </div>
        );
    }

    return (
    <div>
        <div style={{ display: "flex", justifyItems: "center"}}>
            <Col offset={11}>
                <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png' alt='WSX Token'></img>
            </Col>
        </div>

        <Divider> Details </Divider>
        <Flex vertical align='center'>
                <Segmented
                        defaultValue="Supply"
                        style={{ marginBottom: 8 }}
                        options={['Supply', 'Withdraw']}
                        onChange={() => {setSupply(!isSupply)}}
                        />
                        <Content flag={isSupply} />
                <p>
                    Wallet Balance: {wsxBalance} WSX
                </p>
        </Flex>
    </div>
    );
}

export default SXNetworkCardContent;