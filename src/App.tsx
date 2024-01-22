import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './components/routes/routes';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = ''

// 2. Create wagmiConfig
const metadata = {
  name: 'DegenLend',
  description: 'DegenLend - Bet more',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })


function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
