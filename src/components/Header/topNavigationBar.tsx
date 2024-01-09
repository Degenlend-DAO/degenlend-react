import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: 'dashboard'
    },
    {
        label: 'Markets',
        key: 'markets'
    },
    {
        label: (
            <a href="https://snapshot.org/#/sportx.eth"  target="_blank" rel="noopener noreferrer">
                Vote
            </a>
        ), key: 'vote'
    },
]

const TopNavigationBar = () => {
    const [ current, setCurrent ] = useState('dashboard');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return <Menu onClick={onClick} theme='dark' selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items} style={{ flex: 1, minWidth: 0 }}/>;
}

export default TopNavigationBar