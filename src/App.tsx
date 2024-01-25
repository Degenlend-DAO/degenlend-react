import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './components/Routes/routes';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { Chain, polygon } from 'viem/chains'

const sx_testnet = {
  id: 647,
  network: "toronto",
  name: "SX Testnet",
  nativeCurrency: { name: 'Wrapped SX', symbol: 'SX', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.toronto.sx.technology/'] },
    public: {
      http: ['https://rpc.toronto.sx.technology/'],
      webSocket: undefined
    }
  },
  blockExplorers: {
    default: { name: 'SX Testnet Explorer', url: 'https://https://explorer.toronto.sx.technology'}
  },
  contracts: {
    // Empty for now
  }
} as const satisfies Chain
// 1. Get projectId at https://cloud.walletconnect.com
const projectId: string = (process.env.REACT_APP_WEB3_PROJECT_ID as string)

// 2. Create wagmiConfig
const metadata = {
  name: 'DegenLend',
  description: 'DegenLend - Bet more',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [ polygon, sx_testnet ]
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
