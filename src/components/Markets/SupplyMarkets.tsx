import React from 'react';
import { Switch, Modal, Space, Card, Tooltip, } from 'antd';
import SupplyWSXCardContent from '../WalletCard/Supply Markets/WSXTokenCardContent';
import { Provider, useStore } from 'react-redux';
import sxtoken from '../../assets/sx_coin_token.png';
import usdctoken from '../../assets/usd-coin-usdc-logo-64x64.png';
import SupplyUSDCCardContent from '../WalletCard/Supply Markets/USDCTokenCardContent';


const SupplyMarkets: React.FC = () => {
  const store = useStore();
  const { info } = Modal;

  const bodyStyle: React.CSSProperties = {
    backgroundColor: "rgba(37, 102, 216, 1)",
    border: 0,
  };

    const wsxMarketSelected = () => {
        info({
            title: <div style={{ display: "flex", justifyContent: "space-between" }}>
                <><div><Tooltip title="Leverage your WSX and borrow or trade against it">About Supplying WSX Token</Tooltip></div><div><Tooltip title="Use the switch to enable wSX as collateral on the platform"><Switch title='Enable or disable this cryptocurrency on the protocol' checkedChildren='Enabled' /></Tooltip></div></> </div>,
            okText: "Return",
            centered: true,
            closeIcon: true,
            maskClosable: true,
            width: '50vw',
            content: <Provider store={store}><SupplyWSXCardContent /></Provider>,
        });
    }

  return (
    <Card
      hoverable
      bordered={true}
      title="Supply Markets"
      styles={{ body: bodyStyle }}
      onClick={wsxMarketSelected}
    >
      <Card>
        <img src={sxtoken} alt="WSX Token"></img>
      </Card>
    </Card>
  );
};

    return (
        <Card
            bordered={true}
            title="Supply Markets"
            headStyle={{ backgroundColor: 'rgba(37, 102, 216, 1)', border: 0 }}
            >
            <Card onClick={wsxMarketSelected} hoverable >
                <img src={sxtoken} alt='WSX Token'></img>
            </Card>
            <Space />
            <Card onClick={usdcMarketSelected} hoverable >
                <img src={usdctoken} alt='USDC Token'></img>
            </Card>
        </Card>
    );
}

export default SupplyMarkets
