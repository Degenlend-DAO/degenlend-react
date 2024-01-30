import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './components/routes/routes';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'


const sx_testnet = {
  chainId: 647,
  name: "SX Testnet",
  currency: 'SX',
  rpcUrl: 'https://rpc.toronto.sx.technology/',
  explorerUrl: 'https://https://explorer.toronto.sx.technology',
}

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
// 1. Get projectId at https://cloud.walletconnect.com
// const projectId: string = (process.env.REACT_APP_WEB3_PROJECT_ID as string)
const projectId = '68f04d7f1f30b2def8d97eadb86a63fb'

// 2. Create wagmiConfig
const metadata = {
  name: 'DegenLend',
  description: 'DegenLend - Bet more',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [ mainnet, sx_testnet ]


createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, sx_testnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})


function App() {
  return (
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
  );
}

export default App;
