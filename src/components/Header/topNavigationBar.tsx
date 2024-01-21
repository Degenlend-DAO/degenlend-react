import React, { useState } from 'react';
import { Menu, MenuProps, Col} from 'antd';
import WalletCard from '../WalletCard/WalletCard';

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

const menuStyle: React.CSSProperties = {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#2566D8',
}

const TopNavigationBar: React.FC = () => {
    const [current, setCurrent] = useState<string>('dashboard');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return <>
        <Col span={6}>
            <h2> <a href="https://sx.technology/" style={{ color: "#FFFFFF" }}>DegenLend</a></h2>
        </Col>
        <Menu onClick={onClick} theme='dark' selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items} style={menuStyle} />
        <Col span={6} offset={6}>
            {<WalletCard />}
        </Col>
    </>
}

export default TopNavigationBar