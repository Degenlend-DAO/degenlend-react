import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Statistic, Progress } from 'antd';
import { useDispatch, useSelector, } from 'react-redux';
import { RootState } from '../../app/Store';
import { updateSupplyBalance } from '../../feature/dashboard/supplyBalanceSlice';
import { UnknownAction } from '@reduxjs/toolkit';
import { updateBorrowBalance } from '../../feature/dashboard/borrowBalanceSlice';
import { updateborrowLimit } from '../../feature/dashboard/borrowLimitSlice';
import { updatenetAPY } from '../../feature/dashboard/netAPYSlice';



const bodyStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
}


const Dashboard:React.FC = () => {
    const dispatch = useDispatch();
    const walletAddress = useSelector((state: RootState) => state.metaMask.address);
    const supplyBalance = useSelector((state:RootState) => state.supplyBalance.netSupplyBalance);
    const borrowBalance = useSelector((state:RootState) => state.borrowBalance.netBorrowBalance);
    const borrowLimit = useSelector((state:RootState) => state.borrowLimit.borrowLimit);
    const netAPY = useSelector((state:RootState) => state.netAPY.netAPY)

    useEffect(() =>{
        dispatch(updatenetAPY() as unknown as UnknownAction);
        dispatch(updateborrowLimit() as unknown as UnknownAction);
        dispatch(updateBorrowBalance(walletAddress) as unknown as UnknownAction);
        dispatch(updateSupplyBalance(walletAddress) as unknown as UnknownAction);
    });
    
    return     <div>
    <Row gutter={16}>
        <Col span={6} offset={3}>
            <Card bordered={false}>
                <Statistic
                    title="Supply Balance"
                    value={supplyBalance}
                    precision={8}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<img width="20" height="20" src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png' alt='WSX Token'></img>}
                    loading={false}
                />
            </Card>
        </Col>
        <Col span={6}>
            <Card bordered={false}>
                <Statistic
                    title="Net APY"
                    value={netAPY}
                    precision={8}
                    valueStyle={{ color: 'black' }}
                    suffix="%"
                    loading={false}
                />
            </Card>
        </Col>

        <Col span={6}>
            <Card bordered={false}>
                <Statistic
                    title="Borrow Balance"
                    value={borrowBalance}
                    precision={8}
                    valueStyle={{ color: '#3f8600' }}
                    prefix="$"
                    loading={false}
                />
            </Card>
        </Col>
    </Row>
    <Row>
        <Col span={23} >
            <Card bordered={false} bodyStyle={bodyStyle} headStyle={bodyStyle} style={bodyStyle}>
                <h3>
                    Borrow Limit
                </h3>
                <Progress percent={borrowLimit} status="active" />
            </Card>
        </Col>
    </Row>
</div>
}

export default Dashboard