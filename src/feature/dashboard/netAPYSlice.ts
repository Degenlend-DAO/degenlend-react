import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { Web3 } from 'web3';

import JumpRateModelV2 from '../../contracts/JumpRateModelV2.json';

interface NetAPYState {
    netAPY: number;
}

const initialState: NetAPYState = {
    netAPY: 0,
}

export const updatenetAPY = createAsyncThunk(
    'netAPY/update',
    async () => {
        // Contract call
        const web3 = new Web3('https://rpc.toronto.sx.technology/');

        const testnetAddress = '0xd26cCEdaCb5E1166e3285ba5EF9817f45F6bfA76';
        const abi = [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "baseRatePerYear",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "multiplierPerYear",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "jumpMultiplierPerYear",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "kink_",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "baseRatePerBlock",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "multiplierPerBlock",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "jumpMultiplierPerBlock",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "kink",
                  "type": "uint256"
                }
              ],
              "name": "NewInterestParams",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "baseRatePerBlock",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "blocksPerYear",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "cash",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "borrows",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "reserves",
                  "type": "uint256"
                }
              ],
              "name": "getBorrowRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "cash",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "borrows",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "reserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "reserveFactorMantissa",
                  "type": "uint256"
                }
              ],
              "name": "getSupplyRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "isInterestRateModel",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "jumpMultiplierPerBlock",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "kink",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "multiplierPerBlock",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "baseRatePerYear",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "multiplierPerYear",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "jumpMultiplierPerYear",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "kink_",
                  "type": "uint256"
                }
              ],
              "name": "updateJumpRateModel",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "cash",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "borrows",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "reserves",
                  "type": "uint256"
                }
              ],
              "name": "utilizationRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            }
          ] as const;
        const InterestRateContract = new web3.eth.Contract(abi, testnetAddress);
        // params = [ "cash", "borrows", "reserves"]
        // InterestRateContract.methods.getBorrowRate(params).call();
        return 1;
    }
);

export const netAPYSlice = createSlice({
    name: "netAPY",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updatenetAPY.fulfilled, (state, action) => {
            state.netAPY = action.payload || 0;
        })
    }
});

export default netAPYSlice.reducer;