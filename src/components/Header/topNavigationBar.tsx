import React, { useState } from 'react';
import { Menu, MenuProps, Col, Button, Modal, Card } from 'antd';
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



const TopNavigationBar: React.FC = () => {
    const [ current, setCurrent ] = useState('dashboard');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return <>
        <Col span={6}>
        <h2> <a href="https://sx.technology/">DegenLend</a></h2>
        </Col>
        <Menu onClick={onClick} theme='dark' selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items} style={{ flex: 1, minWidth: 0 }}/>
        <Col span={6}>
        <Button type="default" shape="round" icon={<CaretRightOutlined />} size="large">
            Connect Wallet
        </Button>

        </Col>
     </>
}

export default TopNavigationBar