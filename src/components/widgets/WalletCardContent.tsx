import React, { useState } from 'react';
import { Menu, Card, List, Row, Col } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';



const WalletCardContent: React.FC = () => {
    
    const onClickMetamask = () => {
        //Metamask Business Logic
        alert('Hello! Metamask here!' );
    }

    const onClickWalletConnect = () => {
        // WalletConnect Business logic

        alert('Hello! Wallet Connect here!');
    }

    const { Meta } = Card
    
    return <>
<div>
<Row>
            <Col span={6}>
                <Card hoverable style={{ width: 240 }} cover={<img alt="Metamask" src="http://tinyurl.com/8jttsvbw"></img>} onClick={onClickMetamask}>
                </Card>
            </Col>

            <Col span={6} offset={6}>
                <Card hoverable style={{ width: 240}} cover={<img alt="WalletConnect" src="http://tinyurl.com/2smfxt43"></img>} onClick={onClickWalletConnect}>
                </Card>
            </Col>
</Row>
</div>
    </>
}


export default WalletCardContent;