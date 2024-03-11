import React from 'react';
import { Modal, Card, Col, Tooltip } from 'antd';
import USDCCardContent from '../WalletCard/USDCTokenCardContent';
import { Provider, useStore } from 'react-redux';
import usdctoken from '../../assets/usd-coin-usdc-logo-64x64.png';

const BorrowMarkets: React.FC = () => {

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
        <Card
            hoverable
            bordered={true}
            title="Borrow Markets"
            headStyle={{ backgroundColor: 'rgba(37, 102, 216, 1)', border: 0 }}
            onClick={usdcMarketSelected}>
            <Card>
                <img width="64" height="64" src={usdctoken} alt='USDC Token'></img>
            </Card>
        </Card>
    );

}

export default BorrowMarkets