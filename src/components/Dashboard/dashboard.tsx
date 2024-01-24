import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Statistic, Progress } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/Store';
import { updateSupplyBalance } from '../../feature/dashboard/supplyBalanceSlice'
import { updateBorrowBalance } from '../../feature/dashboard/borrowBalanceSlice';



const bodyStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
}


const Dashboard:React.FC = () => {
    // const [supplyBalance, setSupplyBalance] = useState<number>(342122.11);
    const supplyBalance = useSelector((state:RootState) => state.supplyBalance.netSupplyBalance);
    const borrowBalance = useSelector((state:RootState) => state.borrowBalance.netBorrowBalance);
    const borrowLimit = useSelector((state:RootState) => state.borrowLimit.borrowLimit);
    const netAPY = useSelector((state:RootState) => state.netAPY.netAPY)
    
    return     <div>
    <Row gutter={16}>
        <Col span={6} offset={3}>
            <Card bordered={false}>
                <Statistic
                    title="Supply Balance"
                    value={supplyBalance}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix="$"
                    loading={false}
                />
            </Card>
        </Col>
        <Col span={6}>
            <Card bordered={false}>
                <Statistic
                    title="Net APY"
                    value={netAPY}
                    precision={2}
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
                    precision={2}
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