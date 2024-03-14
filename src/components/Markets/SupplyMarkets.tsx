import React from "react";
import { Switch, Modal, Col, Card, Tooltip } from "antd";
import SXTokenCardContent from "../WalletCard/SXTokenCardContent";
import { Provider, useStore } from "react-redux";
import sxtoken from "../../assets/sx_coin_token.png";

const SupplyMarkets: React.FC = () => {
  const store = useStore();
  const { info } = Modal;

  const wsxMarketSelected = () => {
    info({
      title: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <>
            <div>
              <Tooltip title="Leverage your WSX and borrow or trade against it">
                About WSX Token
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Use the switch to enable wSX as collateral on the platform">
                <Switch
                  title="Enable or disable this cryptocurrency on the protocol"
                  checkedChildren="Enabled"
                />
              </Tooltip>
            </div>
          </>{" "}
        </div>
      ),
      okText: "Return",
      centered: true,
      closeIcon: true,
      maskClosable: true,
      width: "50vw",
      content: (
        <Provider store={store}>
          <SXTokenCardContent />
        </Provider>
      ),
    });
  };

  return (
    <Card
      hoverable
      bordered={true}
      title="Supply Markets"
      headStyle={{ backgroundColor: "rgba(37, 102, 216, 1)", border: 0 }}
      onClick={wsxMarketSelected}
    >
      <Card>
        <img src={sxtoken} alt="WSX Token"></img>
      </Card>
    </Card>
  );
};

export default SupplyMarkets;
