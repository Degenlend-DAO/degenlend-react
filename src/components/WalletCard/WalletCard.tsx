import React, { useState } from 'react';
import { Button, Flex, Modal, Typography } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import WalletCardContent from './WalletCardContent';
import { Provider, useStore } from 'react-redux';
import { useBreakPoint } from '../../hooks/UseBreakPoint';

const { Text } = Typography;

const WalletCard: React.FC = () => {
    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string>('0x0000000000000000000000000000000000000000'); //Put in place when adding metamask logic
    const store = useStore()
    const screens = useBreakPoint();

    const { confirm } = Modal;

    const filteredWalletAddress = (address: string) => {
        const size = address.length;
        const prefix = address.substring(0, 5);
        const suffix = address.substring(size - 5);
        return `${prefix}...${suffix}`;
    }

    const buttonStyle: React.CSSProperties = {
        color: 'white',
        backgroundColor: '#277AD6',
    }
    const modalStyle: React.CSSProperties = {
        color: 'white',
        width: 'calc(65% - 8px)',
        height: '300',
    }

    const connectWallet = () => {
        confirm({
            title: "Select a Wallet",
            okText: " Connect",
            cancelText: "Cancel",
            centered: true,
            width: 600,
            closeIcon: true,
            maskClosable: true,
            content:
                <Provider store={store}>
                    <WalletCardContent />
                </Provider>,
            style: modalStyle,
            onOk() {
                setIsWalletConnected(true);
            },
            onCancel() {
                setIsWalletConnected(false);
            },
        });
    }

    const WalletCard = (flag: boolean) => {
        if (flag) {
            return (
                <Flex vertical gap={"small"} style={{ width: "10%" }}>
                    <Button type="text" block shape="round" size="large" onClick={connectWallet}>
                        {filteredWalletAddress(walletAddress)}
                    </Button>;
                </Flex>
            );
        } else {
            return (
                <Flex gap={"small"} style={{ width: "10%" }}>
                    <Button type="default" shape="round" icon={screens !== 'xs' && <CaretRightOutlined />} style={buttonStyle} onClick={connectWallet}>
                        {screens === 'xs' ? 'Connect' : 'Connect Wallet'}
                    </Button>
                </Flex>
            );
        }
    }

    return <>
        {WalletCard(isWalletConnected)}
    </>;
}

export default WalletCard