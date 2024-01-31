import React, { useState, useEffect } from 'react';
import { Row, Flex, Divider, Button, Col, Statistic, Segmented, Input, Tooltip, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { UnknownAction } from '@reduxjs/toolkit';
import { approveUSDC, borrowUSDC, repayUSDC, updateUSDCBalance, updateBorrowBalance } from '../../feature/borrow/USDCSlice';
import { InfoCircleOutlined } from '@ant-design/icons';


const USDCCardContent: React.FC = () => {

    const dispatch = useDispatch();
    const myWalletAddress = useSelector((state: RootState) => state.metaMask.address);
    const borrowAPY = useSelector((state:RootState) => state.USDC.borrowAPY);
    let usdcBalance = useSelector((state:RootState) => state.USDC.usdcBalance);
    const borrowBalance = useSelector((state:RootState) => state.USDC.borrowBalance);
    const [isBorrow, setSupply] = useState(false);


    const enableUSDCHook = () => {
        dispatch(approveUSDC(myWalletAddress) as unknown as UnknownAction);
        // dispatch(borrowUSDC(20000) as unknown as UnknownAction);
    }

    const repayUSDCHook = () => {
        dispatch(repayUSDC(myWalletAddress) as unknown as UnknownAction);
    }
    
    const borrowUSDCHook = () => {
        dispatch(borrowUSDC(20000) as unknown as UnknownAction);
    }

    useEffect(() => {
        dispatch(updateUSDCBalance(myWalletAddress) as unknown as UnknownAction);
        console.log(`updateUSDCBALANCE: ${usdcBalance}`)
        dispatch(updateBorrowBalance(myWalletAddress) as unknown as UnknownAction);
        console.log(`updateBorrowBalance: ${usdcBalance}`)
    })
    
    function Content({ isBorrow }: {isBorrow: boolean}) {

            if (isBorrow) return (
            <div>
            <Row gutter={4}>
                <p>To supply, withdraw or repay your USDC, you need to enable it first</p>
            </Row>

            <Space.Compact style={{ width: '100%' }}>
            <Input size="large" prefix={<img width="20" height="20" src='https://tokensinvaders.com/wp-content/uploads/2021/02/usd-coin-usdc-logo-1024x1024.png' alt='USDC Token'></img>} placeholder="Enter an amount" variant="borderless" suffix={ <Tooltip title="Enter a deposit amount"> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /> </Tooltip> } />
      <Button type="primary">Submit</Button>
    </Space.Compact>
            <Statistic title="Borrow APY" value={borrowAPY} precision={2} suffix="%" />
            
            <Button type="primary" size={'large'} onClick={enableUSDCHook}>
                Enable USDC
            </Button>

            <p>Currently borrowing {borrowBalance} USDC</p>
            </div>)
            else return (
                <div>
                    <Statistic title="Borrow APY" value={borrowAPY} precision={2} suffix="%" />
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
                    <Segmented
                            defaultValue="Borrow"
                            style={{ marginBottom: 8 }}
                            onChange={() => {setSupply(!isBorrow)}}
                            options={['Borrow', 'Repay']}
                            />

                            <Content isBorrow={isBorrow} />


                    <p>
                        Wallet Balance: {usdcBalance} USDC
                    </p>
                </Flex>
    </div>);
}

export default USDCCardContent;