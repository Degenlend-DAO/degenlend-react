import { Button, Dropdown, Flex, MenuProps} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/Store';
import { connectMetaMask } from '../../feature/wallet/MetaMaskSlice';
import { connectWalletConnect } from '../../feature/wallet/WalletConnectSlice';

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

    const items: MenuProps['items'] = [
        {
            label: 'MetaMask',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'WalletConnect',
            key: '2',
            icon: <UserOutlined />,
        },
    ];

    const menuProps: MenuProps = {
        items: items,
        onClick: handleClick
    }

    const WalletCard = (isConnected: boolean) => {
        if (isConnected) {
            return (
                <Flex gap={"small"} style={{ width: "10%" }}>
                    <Button type="text" block shape="round" size="large" style={{ color: 'white' }}>
                        {filteredWalletAddress(walletAddress)}
                    </Button>
                </Flex>
            );
        } else {
            return (
                <Dropdown menu={menuProps}>
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