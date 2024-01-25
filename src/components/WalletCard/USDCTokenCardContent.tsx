import React, { useState, useEffect } from 'react';
import { Card, Row, Flex, Radio, Form, Divider, Button, Col, Statistic, Skeleton } from 'antd';


const enableUSDCLending = () => {
    alert('you can now borrow your USDC!');
}

const USDCCardContent: React.FC = () => {

    const [form] = Form.useForm();

    const borrowAPY = 6.4;
    const usdcBalance = 0;

    return <div>
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
            <Form form={form}>
            <Radio.Group defaultValue="borow" size='large' buttonStyle='solid'>
                            <Radio.Button value="borow">Borrow</Radio.Button>
                            <Radio.Button value="repay">Repay</Radio.Button>
                </Radio.Group>
            </Form>

            <Card bordered={false}>
                        <Statistic
                        title="Borrow APY"
                        value={borrowAPY}
                        precision={2}
                        suffix="%"
                        />
                    </Card>

            <Button type="primary" size={'large'} onClick={enableUSDCLending}>
                Enable USDC
            </Button>

            <p>
                Wallet Balance: {usdcBalance} USDC
            </p>
        </Flex>
    </div>
}

export default USDCCardContent;