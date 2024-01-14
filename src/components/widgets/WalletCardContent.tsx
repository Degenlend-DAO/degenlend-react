import React, { useState, useEffect } from 'react';
import { Menu, Card, List, Row, Col, Skeleton } from 'antd';
import { useSDK } from '@metamask/sdk-react';

import { CaretLeftOutlined } from '@ant-design/icons';
import { setTimeout } from 'timers/promises';


const WalletCardContent: React.FC = () => {
    const [account, setAccount] = useState<string>();
    const [isActive, setActive ] = useState<boolean>(false);
    const { sdk, connected, connecting, provider, chainId } = useSDK();
    
    const onClickMetamask = async () => {
        //Metamask Business Logic
        try {
            const accounts = await window.ethereum!.request({ method: 'eth_requestAccounts' }).catch((err) => {
                if (err.code === 4001) {
                  // EIP-1193 userRejectedRequest error
                  // If this happens, the user rejected the connection request.
                  console.log('Please connect to MetaMask.');
                } else {
                  console.error(err);
                }
              });
              setAccount(`${accounts}`);
              console.log(`${accounts} type: ${typeof(accounts)}`)
          } catch(err) {
            console.warn(`failed to connect..`, err);
          }
    }

    const onClickWalletConnect = () => {
        // WalletConnect Business logic

        alert('Hello! Wallet Connect here!');
    }

    const { Meta } = Card

  useEffect(() => {}, []); // Empty for now
    
  return <div>
    {isActive ? 
      <div>
          <Row>
              <Col span={6}>
                  <Skeleton active style={{width: 240, height: 130 }} />
              </Col>
              <Col span={6} offset={6}>
                  <Skeleton active style={{width: 240, height: 130 }} />
              </Col>
          </Row>
      </div>
    : <div>
          <Row>
              <Col span={6}>
                <Card hoverable style={{ width: 240, height: 130 }} cover={<img alt="Metamask" src="http://tinyurl.com/8jttsvbw"></img>} onClick={onClickMetamask}></Card>
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