import React, { useState, useEffect } from 'react';
import { Flex, Card, Row, Radio, Divider, Button, Col, Form } from 'antd';
import { approveWSX } from '../../feature/supply/withdrawWSXSlice';
import { useDispatch } from 'react-redux';

const enableWSXLending = () => {
    // This is where actions go for the erc20 token (enable useage)
    alert('You can now borrow your WSX!');
    // withdrawWSXSlice  goes here 
}

const SXNetworkCardContent: React.FC = () => {
    const [form] = Form.useForm();

    const [ selectedActivity, setSelectedActivity ] = useState("supply")

    return <div>
        <div style={{ display: "flex", justifyItems: "center"}}>
            <Col offset={11}>
                <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png' alt='WSX Token'></img>
            </Col>
        </div>

        <Divider> Details </Divider>
        <Row gutter={4}>
            <p>To supply, withdraw, or repay your Wrapped SX, you need to enable it first</p>
        </Row>
        <Flex vertical align='center'>
                <Form
                    form={form}>
                            <Radio.Group defaultValue="supply" size='large' buttonStyle='solid'>
                                <Radio.Button value="supply">Supply</Radio.Button>
                                <Radio.Button value="withdraw">Withdraw</Radio.Button>
                            </Radio.Group>
                </Form>

            

        </Flex>


    </div>
}

export default SXNetworkCardContent;