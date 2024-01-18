import React, { useState } from 'react';
import { Button, Col, Modal } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import WalletCardContent from '../widgets/WalletCardContent';


const WalletCard: React.FC = () => {
    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string>('0x0000000000000000000000000000000000000000'); //Put in place when adding metamask logic
    const [loadings, setLoadings] = useState<boolean[]>([]);

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

    const WalletCard = (flag: boolean) => {
        if (flag) {
            return <Button type="text" block shape="round" size="large" onClick={() => { connectWallet(); }}>
                {filteredWalletAddress(walletAddress)}
            </Button>;
        } else {
            return <Button type="default" block shape="round" icon={<CaretRightOutlined />} size="large" style={buttonStyle} onClick={() => { connectWallet(); enterLoading(1); }} loading={loadings[1]}>
                Connect Wallet
            </Button>;
        }
    }

    return <>
        {WalletCard(isWalletConnected)}
    </>;
}

export default WalletCard