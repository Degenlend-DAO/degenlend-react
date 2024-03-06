import React, { useState } from 'react';
import { Switch, Modal, Col, Card, Tooltip,  } from 'antd';
import SXTokenCardContent from '../WalletCard/SXTokenCardContent';
import { enterMarkets, exitMarkets } from '../../feature/supply/WSXSlice';
import { Provider, useStore, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/Store';
import { UnknownAction } from '@reduxjs/toolkit';


const SupplyMarkets:React.FC = () => {
    const [joinMarket, setMarketsJoined] = useState(true);
    const store = useStore();
    const { info } = Modal;
    const dispatch = useDispatch<AppDispatch>()

    // Hooks

    const enableMarkets = () => {
        if (joinMarket === true)
        {
            console.log(`Attempting to enter Markets`)
            dispatch(enterMarkets as unknown as UnknownAction);
            setMarketsJoined(false); //  if markets are exited, please enter, if markets are entered, please exit.
        }

        if (joinMarket === false)
        {
            console.log(`Attempting to exit Markets`)
            dispatch(exitMarkets as unknown as UnknownAction);
            setMarketsJoined(true); //  if markets are exited, please enter, if markets are entered, please exit.
        }
        
    }

    const wsxMarketSelected = () => {
        info({
            title:    <div style={{ display: "flex", justifyContent: "space-between"}}>
            <><div><Tooltip title="Leverage your WSX and borrow or trade against it">About WSX Token</Tooltip></div><div><Tooltip title="Use the switch to enable wSX as collateral on the platform"><Switch title='Enable or disable this cryptocurrency on the protocol' checkedChildren='Enabled' onChange={enableMarkets} /></Tooltip></div></> </div>,
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
