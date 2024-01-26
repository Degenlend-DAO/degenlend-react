import React from 'react';
import { Avatar, Button, Modal, Col, Card, Row, Space, Switch,  } from 'antd';
import SXTokenCardContent from '../WalletCard/SXTokenCardContent';
import { Provider, useStore, useDispatch } from 'react-redux';


const SupplyMarkets:React.FC = () => {

    const store = useStore();
    const { info } = Modal;

    const wsxMarketSelected = () => {
        info({
            title: "About WSX Token",
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