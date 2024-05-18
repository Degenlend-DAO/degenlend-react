import { Contract, ethers, BrowserProvider } from "ethers";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";

import Web3 from "web3";
import { chains } from './web3/chains/chains';
import { erc20ABI } from '@metamask/sdk-react-ui';
import { comptrollerABI } from './web3/abi/comptrollerabi';
import { cerc20ABI } from './web3/abi/cerc20abi';

// Web3 Utilities
export const web3 = new Web3("https://rpc.toronto.sx.technology/");
const testnetURL = "https://rpc.toronto.sx.technology/";
export const provider = new ethers.JsonRpcProvider(testnetURL);

export const address = {
  "cwSX": '0x78887e6863a1B696EF31E86604C72bF2828919FE', "cUSDC": '0xc53105aB43De1e9Fa81C5333eC7B3A2cC65004F4', "degenUSDC": '0xC863E82CD46296F1F81C63cDEB3708505B5b0d97', 'degenWSX': '0x5cB7786A478eEc37Da5F6EA2e946cD860E784743', 'testnetWSX': '0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e', // use gas balance
  "testnetUSDC": '0x5147891461a7C81075950f8eE6384e019e39ab98', "testnetComptroller": '0x8D1230e6Ae4C1Bc573697D93103349C3FDefC944', "JumpRateModelV2": '0xd26cCEdaCb5E1166e3285ba5EF9817f45F6bfA76', "account": '0x0000000000000000000000000000000000000000',
}

const projectId = '68f04d7f1f30b2def8d97eadb86a63fb'

// 2. Create metadata
const metadata = {
  name: 'DegenLend',
  description: 'DegenLend - Bet more',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: chains,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export const wcProvider = modal.getWalletProvider()!;
// export const WCProvider = new BrowserProvider(wcProvider);
// export const wcSigner = WCProvider.getSigner();

// USDC
export const USDC = new Contract(address.testnetUSDC, erc20ABI, provider);

//WSX
export const wSX = new Contract(address.testnetWSX, erc20ABI, provider);

export const comptroller = new Contract(
  address.testnetComptroller,
  comptrollerABI,
  provider,
);

// cWSX
export const cWSX = new Contract(address.cwSX, cerc20ABI, provider);
// cUSDC
export  const cUSDC = new Contract(address.cUSDC, cerc20ABI, provider);

export const degenWSX = new Contract(address.degenWSX, cerc20ABI, provider);

export const degenUSDC = new Contract(address.degenUSDC, cerc20ABI, provider);
export { cerc20ABI };

