import { Button, Dropdown, MenuProps } from 'antd'
import Icon, { LogoutOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/Store';
import { connectMetaMask, connectWalletConnect, disconnectWallet } from '../../feature/wallet/walletSlice';


const WalletCard: React.FC = () => {
    const walletAddress = useSelector((state: RootState) => state.metaMask.address);
    const isConnected = useSelector((state: RootState) => state.metaMask.isConnected);
    const dispatch = useDispatch<AppDispatch>()

    const onClickMetaMask = () => {
        dispatch(connectMetaMask());
    }

    const onClickWalletConnect = () => {
        dispatch(connectWalletConnect());
    };

    const handleDisconnect = () => {
        dispatch(disconnectWallet());
    }

    const filteredWalletAddress = (address: string | undefined) => {
        const size = address!.length;
        const prefix = address!.substring(0, 5);
        const suffix = address!.substring(size - 5);
        return `${prefix}...${suffix}`;
    }

    const handleClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
        if (e.key === '1') {
            onClickMetaMask();
        } else if (e.key === '2') {
            onClickWalletConnect();
        }
    };

    const dropdownStyle: React.CSSProperties = {
        objectFit: 'contain',
        width: 100,
        height: 100
    }

    const MetaMaskIcon = () => <Icon component={() => <img alt="Metamask" src="http://tinyurl.com/8jttsvbw" style={dropdownStyle} />} />;

    const WalletConnectIcon = () => <Icon component={() => <img alt="WalletConnect" src="http://tinyurl.com/2smfxt43" style={dropdownStyle} />} />;

    const walletOptions: MenuProps['items'] = [
        {
            label: 'MetaMask',
            key: '1',
            icon: <MetaMaskIcon />,
        },
        {
            label: 'WalletConnect',
            key: '2',
            icon: <WalletConnectIcon />,
        },
    ];

    const accountOptions: MenuProps['items'] = [
        {
            label: 'Disconnect',
            key: '1',
            icon: <LogoutOutlined />
        }
    ];

    const accountMenuProps: MenuProps = {
        items: accountOptions,
        onClick: handleDisconnect
    }

    const walletMenuProps: MenuProps = {
        items: walletOptions,
        onClick: handleClick
    }

    const WalletCard = (isConnected: boolean) => {
        if (isConnected) {
            return (
                <Dropdown menu={accountMenuProps}>
                    <Button type="primary">{filteredWalletAddress(walletAddress)}</Button>
                </Dropdown>
            );
        } else {
            return (
                <Dropdown menu={walletMenuProps}>
                    <Button type="primary">Connect to a wallet</Button>
                </Dropdown>
            );
        }
    }

    return <>
        {WalletCard(isConnected)}
    </>;
}

export default WalletCard