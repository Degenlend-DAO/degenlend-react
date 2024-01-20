import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Skeleton } from 'antd';
import { useSDK } from '@metamask/sdk-react';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/Store';
import { connectMetaMask } from '../../feature/MetaMaskSlice';
import { connectWalletConnect } from '../../feature/WalletConnectSlice';


const WalletCardContent: React.FC = () => {
  const [account, setAccount] = useState<string>('');
  const [isActive, setActive] = useState<boolean>(false);
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  const dispatch = useDispatch<AppDispatch>()
  const onClickMetaMask = () => {
    dispatch(connectMetaMask());
  }

  const onClickWalletConnect = () => {
    dispatch(connectWalletConnect());
  };

  const { Meta } = Card

  useEffect(() => { }, []); // Empty for now

  return <div>
    {isActive ?
      <div>
        <Row>
          <Col span={6}>
            <Skeleton active style={{ width: 240, height: 130 }} />
          </Col>
          <Col span={6} offset={6}>
            <Skeleton active style={{ width: 240, height: 130 }} />
          </Col>
        </Row>
      </div>
      : <div>
        <Row>
          <Col span={6}>
            <Card hoverable style={{ width: 240, height: 130 }} cover={<img alt="Metamask" src="http://tinyurl.com/8jttsvbw"></img>} onClick={onClickMetaMask}></Card>
          </Col>
          <Col span={6} offset={6}>
            <Card hoverable style={{ width: 240, height: 130 }} cover={<img alt="WalletConnect" src="http://tinyurl.com/2smfxt43"></img>} onClick={onClickWalletConnect}></Card>
          </Col>
        </Row>
      </div>
    }
  </div>;
}


export default WalletCardContent;