import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USDC } from '../../utils/web3';
import { BrowserProvider, Contract, ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/Store';



interface USDCState {
    status: string,
    borrowAPY: number,
    supplyAPY: number,
    usdcBalance: number,
}

const initialState: USDCState = {
    status: 'initial',
    borrowAPY: 0.00,
    supplyAPY: 0.00,
    usdcBalance: 0.00,
}

export const updateUSDCBalance = createAsyncThunk(
    'usdcBalance/update',
    async (walletAddress:string ) => {
        try {
            const myWalletAddress:String = walletAddress as unknown as String;
            const name = await USDC.name();
            const balance = await USDC.balanceOf(myWalletAddress);
            console.log(`[Console] invoke updateUSDCBalance: name: ${name} balance: ${balance}`)
            return balance;
        } catch (error) {
            console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
            return 0;
        }
    }
);

export const approveUSDC = createAsyncThunk('usdc/approve', async (myWalletAddress: string) => {
    try {
        const amount = 2000;
        const tx = await USDC.approve(
            myWalletAddress,
            ethers.parseEther(amount + '')
          );
    } catch (error) {
        console.log(`something went wrong: ${error}`)
    }
});

export const confirmUSDC = createAsyncThunk('usdc/confirm', async () => {});

export const USDCSlice = createSlice({
    name: "USDC",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUSDCBalance.fulfilled, (state, action) => {
            state.usdcBalance = action.payload;
        })
    }
});

export default USDCSlice.reducer;
