import React, { useState } from 'react';
import { Menu, MenuProps, Col, Button, Modal, Card, List, Row } from 'antd';
import { CaretRightOutlined, RiseOutlined, WalletFilled } from '@ant-design/icons';
import { modalGlobalConfig } from 'antd/es/modal/confirm';
import WalletCardContent from '../widgets/WalletCardContent';

const { confirm } = Modal;

const items: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: 'dashboard'
    },
    {
        label: (
            <a href="https://snapshot.org/#/sportx.eth"  target="_blank" rel="noopener noreferrer">
                Vote
            </a>
        ), key: 'vote'
    },
]


const buttonStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: '#277AD6',
}

const modalStyle: React.CSSProperties = {
    color: 'white',
    width: 'calc(65% - 8px)',
    height: '300',
    
}




const TopNavigationBar: React.FC = () => {
    const [ current, setCurrent ] = useState('dashboard');
    const [ isWalletConnected, setIsWalletConnected ] = useState(false);
    const [ walletAddress, setWalletAddress ] = useState('0x0000000000000000000000000000000000000000'); //Put in place when adding metamask logic
    const [ loadings, setLoadings ] = useState<boolean[]>([]);

    
    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = true;
          return newLoadings;
        });
    
        setTimeout(() => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
        }, 6000);
      };

    const filteredWalletAddress = (address: string) => {
        
        const charArray = Array.from(address);
        const filteredAddress = `     ${charArray[0]}${charArray[1]}${charArray[2]}${charArray[3]}${charArray[4]}...${charArray[charArray.length - 3]}${charArray[charArray.length - 2]}${charArray[charArray.length -1]}     `;


        return filteredAddress;
    }

    const WalletWidget = (flag: boolean) => {
        if (flag == true) {
            return   <Row>
            <Col>
            <Button type="text" block shape="round" size="large" onClick={() => { connectWallet(); } }>
                {filteredWalletAddress(walletAddress)}
            </Button>
            </Col>
        </Row>;            
        }

        if ( flag == false ) {
            return <Button type="default" block shape="round" icon={<CaretRightOutlined />} size="large" style={buttonStyle} onClick={() => {connectWallet(); enterLoading(1);}} loading={loadings[1]}>
            Connect Wallet
        </Button>;
        }
    }


    const connectWallet = () => {
        confirm({
            title: "Select a Wallet",
            okText: " Connect",
            cancelText: " Disconnect",
            centered: true,
            width: 600,
            content: <WalletCardContent />,
            style: modalStyle,
            onOk() {
                setIsWalletConnected(true);
            },
            onCancel() {
                setIsWalletConnected(false);
            },
        });
        
    }

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return <>
        <Col span={6}>
        <h2> <a href="https://sx.technology/" style={{ color: "#60C9B6"}}>DegenLend</a></h2>
        </Col>
        <Menu onClick={onClick} theme='dark' selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items} style={{ flex: 1, minWidth: 0, backgroundColor: '#2566D8' }}/>
        <Col span={6} offset={6}>
        {WalletWidget(isWalletConnected)}
        </Col>
     </>
}

export default TopNavigationBar