import React, { useEffect, useState } from 'react';
import { Flex, Card, Row, Radio, Divider, Button, Col, Form, Statistic, Segmented, Input, Tooltip, Space } from 'antd';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { approveWSX, updateWSXBalance, updatewsxSupplyAPY, updateSupplyBalance, supplyWSX, withdrawWSX } from '../../feature/supply/WSXSlice';
import { UnknownAction } from '@reduxjs/toolkit';
import { InfoCircleOutlined } from '@ant-design/icons';

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

    function Content({ isSupply }: {isSupply: boolean}) {

        if (isSupply) return (
        
        <div>
        <Statistic
        title="Supply APY"
        value={supplyAPY}
        precision={6}
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
                <Space.Compact style={{ width: '100%' }}>
                    <Input size="large" prefix={<img width="20" height="20" src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png' alt='WSX Token'></img>} placeholder="Enter an amount" variant="borderless" suffix={ <Tooltip title="Enter a deposit amount"> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /> </Tooltip> } />
                    <Button type="primary">Submit</Button>
                </Space.Compact>
                <Statistic
                    title="Borrow APY"
                    value= {0}
                    precision={2}
                    suffix="%"
                />
            </div>
        );
    }

    return (
    <div style={{textAlign: "center"}}>
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
                        <Content isSupply={isSupply} />
                <p>
                    Wallet Balance: {wsxBalance} WSX
                </p>
        </Flex>
    </div>
    );
}

export default SXNetworkCardContent;