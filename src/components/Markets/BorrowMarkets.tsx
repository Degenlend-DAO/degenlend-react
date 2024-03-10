import React from 'react';
import { Modal, Card, Col, Tooltip } from 'antd';
import USDCCardContent from '../WalletCard/USDCTokenCardContent';
import { Provider, useStore } from 'react-redux';



const BorrowMarkets = () => {

    const store = useStore();
    const { info } = Modal;

    const usdcMarketSelected = () => {
        info({
            title: <Tooltip title="Leverage your USDC and borrow or trade against it">About USDC Token</Tooltip>,
            okText: "Return",
            centered: true,
            closeIcon: true,
            maskClosable: true,
            width: 810,
            content: <Provider store={store}><USDCCardContent /></Provider>,
        })
    }

    return (
        <div className="column">
            <Col>
                <Card bordered={true} title="Borrow Markets" onClick={usdcMarketSelected} style={{ width: 450 }}>

                    <Card hoverable>
                        <img width="64" height="64" src="https://tokensinvaders.com/wp-content/uploads/2021/02/usd-coin-usdc-logo-1024x1024.png"></img>
                    </Card>

                </Card>
            </Col>
        </div>
    );

}

export default BorrowMarkets