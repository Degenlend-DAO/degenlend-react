import React, { useState, useEffect } from 'react';
import { Row, Flex, Divider, Button, Col, Statistic, Segmented, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { UnknownAction } from '@reduxjs/toolkit';
import { approveUSDC, updateUSDCBalance } from '../../feature/borrow/USDCSlice';


const USDCCardContent: React.FC = () => {

    const dispatch = useDispatch();
    const [isSupply, setSupply] = useState(false);
    const myWalletAddress = useSelector((state: RootState) => state.metaMask.address);
    const borrowAPY = useSelector((state:RootState) => state.borrowUSDC.borrowAPY);
    const usdcBalance = useSelector((state:RootState) => state.borrowUSDC.usdcBalance);

    const enableUSDCLending = () => {
        dispatch(approveUSDC(myWalletAddress) as unknown as UnknownAction);
    }
    

    useEffect(() => {
        dispatch(updateUSDCBalance(myWalletAddress) as unknown as UnknownAction);
    })
    
    function SegmentedContent({ isSupply }: {isSupply: boolean}) {

            if (isSupply) return (
            <div>

            <Statistic title="Borrow APY" value={borrowAPY} precision={2} suffix="%" />

            <Button type="primary" size={'large'} onClick={enableUSDCLending}>
                Enable USDC
            </Button>
            </div>)
            else return (
                <div>
                    <Input placeholder="Enter an amount" variant="borderless" />
                    <Statistic title="Supply APY" value={borrowAPY} precision={2} suffix="%" />
                </div>
            );
        }

    return (<div>
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
                    defaultValue="Withdraw"
                    style={{ marginBottom: 8 }}
                    onChange={() => {setSupply(!isSupply)}}
                    options={['Supply', 'Withdraw']}
                    />

                    <SegmentedContent isSupply={isSupply} />


            <p>
                Wallet Balance: {usdcBalance} USDC
            </p>
        </Flex>
    </div>);
}

export default USDCCardContent;