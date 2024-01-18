import React, { useState } from 'react';
import { Menu, MenuProps, Col, Button, Modal, Card, List, Row } from 'antd';
import { CaretRightOutlined, RiseOutlined, WalletFilled } from '@ant-design/icons';
import { modalGlobalConfig } from 'antd/es/modal/confirm';
import WalletCard from '../widgets/WalletCard';

const { confirm } = Modal;

const items: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: 'dashboard'
    },
    {
        label: (
            <a href="https://snapshot.org/#/sportx.eth" target="_blank" rel="noopener noreferrer">
                Vote
            </a>
        ), key: 'vote'
    },
]



const TopNavigationBar: React.FC = () => {
    const [current, setCurrent] = useState('dashboard');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return <>
        <Col span={6}>
            <h2> <a href="https://sx.technology/" style={{ color: "#60C9B6" }}>DegenLend</a></h2>
        </Col>
        <Menu onClick={onClick} theme='dark' selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items} style={{ flex: 1, minWidth: 0, backgroundColor: '#2566D8' }} />
        <Col span={6} offset={6}>
            {<WalletCard />}
        </Col>
    </>
}

export default TopNavigationBar