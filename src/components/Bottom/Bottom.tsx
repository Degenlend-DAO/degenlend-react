import { Layout, Menu, Typography } from 'antd';
const { Footer } = Layout;
const { Title } = Typography;

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '10px 50px',
    color: '#000000',
    backgroundColor: 'lightgrey',
};

const Bottom: React.FC = () => {
    return (
        <Footer style={footerStyle}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'red', marginRight: 5 }}>●</span>
                <span style={{ marginRight: 20 }}>Latest Block: --</span>
                <Menu mode="horizontal" style={{ borderBottom: 'none' }}>
                    <Menu.Item key="markets">Markets</Menu.Item>
                    <Menu.Item key="governance">Governance</Menu.Item>
                    <Menu.Item key="comp">COMP</Menu.Item>
                    <Menu.Item key="support">Support</Menu.Item>
                    <Menu.Item key="terms">Terms</Menu.Item>
                    <Menu.Item key="About Us">About Us</Menu.Item>
                </Menu>
            </div>
            <Title level={4}>Created by Prediction Labs Team</Title>
        </Footer>
    );
}

export default Bottom