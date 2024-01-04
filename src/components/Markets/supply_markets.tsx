import React from 'react';
import { Avatar, Button, List } from 'antd';

const supplyMarkets = [
    {
        title: "SX Token",
        description: "The token for SX blockchain",
        apy: "5%",
        walletBalance: "0",
        liquidity: ""
    },
    {
        title: "AthleteX Token",
        description: "The token for AthleteX Markets",
        apy: "8.7%",
        walletBalance: "",
        liquidity: ""
    }
]

const SupplyMarkets = () => {

    const loadItemDetails = () => {

    }


    <div className="column">
        <h3>
            Supply Markets
        </h3>

        <List 
            header={        <div className="row">
            <h4> Asset </h4>
            <h4> APY </h4>
            <h4> Wallet </h4>
            <h4> Collateral </h4>
        </div>}
            itemLayout='horizontal'
            dataSource={supplyMarkets}
            renderItem={(item) => <List.Item>
                <Button onClick={loadItemDetails}>
                <List.Item.Meta title={ <h4>{item.title}</h4> } description={ <p>{item.description}</p> } />
                </Button>
            </List.Item>}
        />
    </div>
}

export default SupplyMarkets