import React, { useState, useEffect } from 'react';
import { Row, Flex, Divider, Button, Col, Statistic, Segmented, Input, Tooltip, Space, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { UnknownAction } from '@reduxjs/toolkit';
import { approveUSDC, borrowUSDC, repayUSDC, updateUSDCBalance, updateBorrowBalance, updateusdcBorrowAPY } from '../../feature/borrow/USDCSlice';
import { InfoCircleOutlined } from '@ant-design/icons';


const USDCCardContent: React.FC = () => {

    const dispatch = useDispatch();
    let borrowAmount:number = 0;
    let approveAmount: number = 10000000;
    let repayAmount: number = 0;
    const myWalletAddress = useSelector((state: RootState) => state.metaMask.address);
    const borrowAPY = useSelector((state:RootState) => state.USDC.borrowAPY);
    const usdcBalance = useSelector((state:RootState) => state.USDC.usdcBalance);
    const borrowBalance = useSelector((state:RootState) => state.USDC.borrowBalance);
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const [isBorrow, setSupply] = useState(false);


    const enableUSDCHook = () => {
        dispatch(approveUSDC({amount: approveAmount, addressToApprove: myWalletAddress}) as unknown as UnknownAction);
    }

    const repayUSDCHook = () => {
        dispatch(repayUSDC(repayAmount) as unknown as UnknownAction);
    }
    
    const borrowUSDCHook = () => {
        dispatch(borrowUSDC(borrowAmount) as unknown as UnknownAction);
    }

    useEffect(() => {
        dispatch(updateUSDCBalance(myWalletAddress) as unknown as UnknownAction);
        dispatch(updateusdcBorrowAPY() as unknown as UnknownAction);
        dispatch(updateBorrowBalance(myWalletAddress) as unknown as UnknownAction);
    })
    
    function Content({ isBorrow }: {isBorrow: boolean}) {

            if (isBorrow) return (
            <div>
            <Row gutter={4}>
                <p>To supply, withdraw or repay your USDC, you need to enable it first</p>
            </Row>

            <Space.Compact style={{ width: '100%' }}>
                <InputNumber style={{ width: '75%', }} size="large" stringMode onChange={(value) => {repayAmount = value! as number}} prefix={<img width="20" height="20" src='https://tokensinvaders.com/wp-content/uploads/2021/02/usd-coin-usdc-logo-1024x1024.png' alt='USDC Token'></img>} placeholder="Enter an amount" variant="borderless" suffix={ <Tooltip title="Enter a deposit amount"> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /> </Tooltip> } />
                <Button type="primary" onClick={repayUSDCHook}>Repay</Button>
            </Space.Compact>
            <Statistic title="Borrow APY" value={borrowAPY} precision={2} suffix="%" />
            
            <Button type="primary" size={'large'} onClick={enableUSDCHook}>
                Enable USDC
            </Button>

            <p>Currently borrowing {USDollar.format(borrowBalance)} USDC</p>
            </div>)
            else return (
                <div>
                    <Statistic title="Borrow APY" value={borrowAPY} precision={2} suffix="%" />
                    <Space.Compact style={{ width: '100%' }}>
                        <InputNumber style={{ width: '75%', }} stringMode id='borrowAmount' placeholder="Enter an amount" size="large" onChange={(value) => {borrowAmount = value! as number}} prefix={<img width="20" height="20" src='https://tokensinvaders.com/wp-content/uploads/2021/02/usd-coin-usdc-logo-1024x1024.png' alt='USDC Token'></img>} variant="borderless" suffix={ <Tooltip title="Enter a deposit amount"> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /> </Tooltip> } />
                        <Button type="primary" onClick={borrowUSDCHook}>Borrow</Button>
                    </Space.Compact>
                </div>
            );
        }

    return (
            <div style={{textAlign: "center"}}>
                <div style={{ display: "flex", justifyItems: "center" }}>
                    <Col offset={11}>
                        <img width="64" height="64" src='https://tokensinvaders.com/wp-content/uploads/2021/02/usd-coin-usdc-logo-1024x1024.png' alt='USDC Token'></img>
                    </Col>
                </div>

                <Divider> Details </Divider>
                <Flex vertical align='center'>

                        <Tooltip title="Borrow or Repay your USDC token from the degen protocol">
                            <Segmented
                                    defaultValue="Borrow"
                                    style={{ marginBottom: 8, }}
                                    onChange={() => {setSupply(!isBorrow)}}
                                    options={['Borrow', 'Repay']}
                                    />
                        </Tooltip>


                                <Content isBorrow={isBorrow} />


                    <p>
                        Wallet Balance: {USDollar.format(usdcBalance)} USDC
                    </p>
                </Flex>
    </div>
    );
}

export default USDCCardContent;