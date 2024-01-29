import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { address, USDC, usdcABI, wSX } from '../../utils/web3';
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
    async () => {
        try {
            const myWalletAddress = useSelector((state: RootState) => state.metaMask.address);
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

export const approveUSDC = createAsyncThunk('usdc/approve', async () => {

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
