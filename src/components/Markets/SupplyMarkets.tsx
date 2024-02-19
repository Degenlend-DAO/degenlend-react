import React from 'react';
import { Avatar, Switch, Modal, Col, Card, Tooltip,  } from 'antd';
import SXTokenCardContent from '../WalletCard/SXTokenCardContent';
import { Provider, useStore, useDispatch } from 'react-redux';


const SupplyMarkets:React.FC = () => {

    const store = useStore();
    const { info } = Modal;

    const wsxMarketSelected = () => {
        info({
            title:    <div style={{ display: "flex", justifyContent: "space-between"}}>
            <><div><Tooltip title="Leverage your WSX and borrow or trade against it">About WSX Token</Tooltip></div><div><Tooltip title="Use the switch to enable wSX as collateral on the platform"><Switch title='Enable or disable this cryptocurrency on the protocol' checkedChildren='Enabled' /></Tooltip></div></> </div>,
            okText: "Return",
            centered: true,
            closeIcon: true,
            maskClosable: true,
            width: 810,
            
            content: <Provider store={store}><SXTokenCardContent /></Provider>,
        });
    }


    return (
        <div className="column">
        <Col>
            <Card bordered={true} title="Supply Markets" style={{ width: 450 }} onClick={wsxMarketSelected}>
                <Card hoverable>
                        <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/8377.png'></img>
                </Card>
            </Card>
        </Col>
    </div>
    );
}

export default SupplyMarkets