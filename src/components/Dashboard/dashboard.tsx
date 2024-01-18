import React from 'react';
import { Card, Col, Row, Statistic, Progress } from 'antd';


const bodyStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
}

const Dashboard = () => <>{
<div>
    <Row gutter={16}>
        <Col span={6} offset={3}>
            <Card bordered={false}>
            <Statistic
                title="Supply Balance"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix="$"
                loading={true}
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
                loading={true}
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
                loading={true}
            />
            </Card>
        </Col>
    </Row>
    <Row  >
        <Col span={24} >
        <Card bordered={false} bodyStyle={bodyStyle} headStyle={bodyStyle} style={bodyStyle}>
            <h3>
                Borrow Limit
            </h3>
            <Progress percent={38} status="active"   />
        </Card>
        </Col>
    </Row>
</div>
}</>

export default Dashboard