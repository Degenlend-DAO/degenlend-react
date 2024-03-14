import React from 'react';
import { Modal, Card, Col, Tooltip } from 'antd';
import USDCCardContent from '../WalletCard/Borrow Markets/USDCTokenCardContent';
import { Provider, useStore } from 'react-redux';
import usdctoken from '../../assets/usd-coin-usdc-logo-64x64.png';
import wsxtoken from '../../assets/sx_coin_token.png';
import BorrowWSXCardContent from '../WalletCard/Borrow Markets/WSXTokenCardContent';

const BorrowMarkets: React.FC = () => {

    const store = useStore();
    const { info } = Modal;

    const usdcMarketSelected = () => {
        info({
            title: <Tooltip title="Leverage your USDC and borrow or trade against it">About Borrowing USDC Token</Tooltip>,
            okText: "Return",
            centered: true,
            closeIcon: true,
            maskClosable: true,
            width: '50vw',
            content: <Provider store={store}><USDCCardContent /></Provider>,
        })
    }

    const wsxMarketSelected = () => {
        info({
            title: <Tooltip title="Leverage your WSX and borrow or trade against it">About Borrowing WSX Token</Tooltip>,
            okText: "Return",
            centered: true,
            closeIcon: true,
            maskClosable: true,
            width: '50vw',
            content: <Provider store={store}><BorrowWSXCardContent /></Provider>,
        })
    }

    return (
        <Card
            bordered={true}
            title="Borrow Markets"
            headStyle={{ backgroundColor: 'rgba(37, 102, 216, 1)', border: 0 }}
            >
            <Card onClick={wsxMarketSelected} hoverable >
                <img width="64" height="64" src={wsxtoken} alt='Wrapped SX Token'></img>
            </Card>
            <Card onClick={usdcMarketSelected} hoverable>
                <img width="64" height="64" src={usdctoken} alt='USDC Token'></img>
            </Card>
        </Card>
    );

}

export default BorrowMarkets