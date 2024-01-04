import React from 'react';
import { Card, Col, Row, Statistic, Progress } from 'antd';



const Dashboard = () => <>{
<div>
    <Row gutter={16}>
        <Col span={6}>
            <Card bordered={false}>
            <Statistic
                title="Supply Balance"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix="$"
            />
            </Card>
        </Col>
        <Col span={6}>
            <Card bordered={false}>
            <Statistic
                title="Net APY"
                value={0}
                precision={2}
                valueStyle={{ color: 'black' }}
                suffix="%"
            />
            </Card>
        </Col>

        <Col span={6}>
            <Card bordered={false}>
            <Statistic
                title="Borrow Balance"
                value={20}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix="$"
            />
            </Card>
        </Col>
    </Row>
    <Row gutter={12} >
        <Col span={12}>
        <Card bordered={true} title="Borrow Limit">
                    <Progress percent={30} status="active" />
                </Card>
        </Col>
    </Row>
</div>
}</>

export default Dashboard