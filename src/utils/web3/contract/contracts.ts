import { Contract } from "ethers";
import { erc20ABI } from "wagmi";
import { address, provider } from "../../web3";
import { cerc20ABI } from "../abi/cerc20abi";
import { comptrollerABI } from "../abi/comptrollerabi";

export const USDC = new Contract(address.testnetUSDC, erc20ABI, provider);
export const wSX = new Contract(address.testnetWSX, erc20ABI, provider);
export const comptroller = new Contract(address.testnetComptroller, comptrollerABI, provider);
export const cWSX = new Contract(address.cwSX, cerc20ABI, provider);
export const cUSDC = new Contract(address.degenUSDC, cerc20ABI, provider);