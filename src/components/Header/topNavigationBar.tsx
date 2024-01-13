import React, { useState } from 'react';
import { Menu, MenuProps, Col, Button, Modal, Card, List } from 'antd';
import { CaretRightOutlined, WalletFilled } from '@ant-design/icons';

const { confirm } = Modal;

const items: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: 'dashboard'
    },

    ///Markets may be included in the future
    // {
    //     label: 'Markets',
    //     key: 'markets'
    // },
    {
        label: (
            <a href="https://snapshot.org/#/sportx.eth"  target="_blank" rel="noopener noreferrer">
                Vote
            </a>
        ), key: 'vote'
    },
]


const walletOptions = [
    'Metamask',
    'WalletConnect'
]

const buttonStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: '#60C9B6',
}

const wcStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: '#556FFC',
}

const metamaskStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: '#EF8533',
}

// Connect to Metamask here
const connectMetamask = () => {}

const connectWalletConnect = () => {}



const TopNavigationBar: React.FC = () => {
    const [ current, setCurrent ] = useState('dashboard');
    const [ loadings, setLoadings ] = useState<boolean[]>([]);

    
    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = true;
          return newLoadings;
        });
    }


    const connectWallet = () => {
        confirm({
            title: "Connect your Wallet to Continue",
            content: 
            <Card>
                <List
                    bordered
                    dataSource={walletOptions}
                />
            </Card>,
            onOk() {
            },
            onCancel() {
            },
        });
    }

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return <>
        <Col span={6}>
        <h2> <a href="https://sx.technology/">DegenLend</a></h2>
        </Col>
        <Menu onClick={onClick} theme='dark' selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items} style={{ flex: 1, minWidth: 0, backgroundColor: '#2566D8' }}/>
        <Col span={6}>
        <Button type="default" block shape="round" icon={<CaretRightOutlined />} size="large" style={buttonStyle} onClick={() => {connectWallet(); enterLoading(1);}} loading={loadings[1]}>
            Connect Wallet
        </Button>
 
        </Col>
     </>
}

export default TopNavigationBar