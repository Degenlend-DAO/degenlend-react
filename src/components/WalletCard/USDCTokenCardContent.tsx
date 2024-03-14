import React, { useState, useEffect } from "react";
import {
  Row,
  Flex,
  Divider,
  Button,
  Col,
  Statistic,
  Segmented,
  Input,
  Tooltip,
  Space,
  InputNumber,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/Store";
import { UnknownAction } from "@reduxjs/toolkit";
import {
  approveUSDC,
  borrowUSDC,
  repayUSDC,
  updateUSDCBalance,
  updateBorrowBalance,
  updateusdcBorrowRate,
} from "../../feature/borrow/USDCSlice";
import { InfoCircleOutlined } from "@ant-design/icons";
import usdctoken from "../../assets/usd-coin-usdc-logo-64x64.png";

const USDCCardContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  let borrowAmount: number = 0;
  let approveAmount: number = 10000000;
  let repayAmount: number = 0;
  const myWalletAddress = useSelector(
    (state: RootState) => state.metaMask.address,
  );
  const borrowRate = useSelector((state: RootState) => state.USDC.borrowRate);
  const usdcBalance = useSelector((state: RootState) => state.USDC.usdcBalance);
  const borrowBalance = useSelector(
    (state: RootState) => state.USDC.borrowBalance,
  );
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [isBorrowingEnabled, setisBorrowingEnabled] = useState<boolean>(false);
  const [isBorrow, setSupply] = useState<boolean>(true);

  const enableUSDCHook = () => {
    dispatch(
      approveUSDC({ amount: approveAmount, addressToApprove: myWalletAddress }),
    );
    setisBorrowingEnabled(true);
  };

  const repayUSDCHook = () => {
    dispatch(repayUSDC(repayAmount));
  };

  const borrowUSDCHook = () => {
    dispatch(borrowUSDC(borrowAmount));
  };

  useEffect(() => {
    dispatch(updateusdcBorrowRate());
    dispatch(updateUSDCBalance(myWalletAddress));
    dispatch(updateBorrowBalance(myWalletAddress));
  });

  function Content({ isBorrow }: { isBorrow: boolean }) {
    if (isBorrow)
      return (
        <div>
          <Row gutter={4}>
            <p>
              To supply, withdraw, or repay your USDC, you need to enable it
              first
            </p>
          </Row>
          <Statistic
            title="Borrow Rate"
            value={borrowRate}
            precision={2}
            suffix="%"
          />
          <Space direction="vertical" style={{ width: "100%" }}>
            <InputNumber
              style={{ width: "75%" }}
              stringMode
              id="borrowAmount"
              placeholder="Enter an amount"
              size="large"
              onChange={(value) => {
                borrowAmount = value! as number;
              }}
              prefix={
                <img width="20" height="20" src={usdctoken} alt="USDC Token" />
              }
              variant="outlined"
              controls={false}
            />
            <Button type="primary" size="large" onClick={borrowUSDCHook}>
              Borrow
            </Button>
          </Space>
        </div>
      );
    else
      return (
        <div>
          {isBorrowingEnabled ? (
            <Space direction="vertical" style={{ width: "100%" }}>
              <InputNumber
                style={{ width: "75%" }}
                size="large"
                stringMode
                onChange={(value) => {
                  repayAmount = value! as number;
                }}
                prefix={
                  <img
                    width="20"
                    height="20"
                    src={usdctoken}
                    alt="USDC Token"
                  />
                }
                placeholder="Enter an amount"
                variant="outlined"
                controls={false}
              />
              <Button type="primary" size="large" onClick={repayUSDCHook}>
                Repay
              </Button>
            </Space>
          ) : (
            <Button type="primary" size={"large"} onClick={enableUSDCHook}>
              Approve USDC for Repay
            </Button>
          )}
          <p>Currently borrowing {USDollar.format(borrowBalance)} USDC</p>
        </div>
      );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Row justify="center" align="middle" style={{ marginBottom: 20 }}>
        <Col>
          <img width="64" height="64" src={usdctoken} alt="USDC Token" />
        </Col>
      </Row>
      <Divider>Details</Divider>
      <Row justify="center" gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col>
          <Tooltip title="Borrow or Repay your USDC token">
            <Segmented
              defaultValue="Borrow"
              options={["Borrow", "Repay"]}
              onChange={() => {
                setSupply(!isBorrow);
              }}
            />
          </Tooltip>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col>
          <Content isBorrow={isBorrow} />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <p>Wallet Balance: {USDollar.format(usdcBalance)} USDC</p>
        </Col>
      </Row>
    </div>
  );
};

export default USDCCardContent;
