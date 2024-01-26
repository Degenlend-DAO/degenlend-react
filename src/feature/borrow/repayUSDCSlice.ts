import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Web3 } from 'web3';

interface RepayUSDCState {
    status: string,
}

const initialState: RepayUSDCState = {
    status: 'initial',
}

export const updateUSDCBalance = createAsyncThunk(
    'usdcBalance/update',
    async () => {
        const web3 = new Web3('https://rpc.toronto.sx.technology/');          
          const balance = web3.utils.fromWei(await web3.eth.getBalance('0x4869aF0Aed0a9948f724f809dC0DCcF9885cCe34'), "ether");
        return balance;
    }
);

export const approveUSDC = createAsyncThunk('usdc/approve', async () => {});

export const confirmUSDC = createAsyncThunk('usdc/confirm', async () => {});

export const repayUSDCSlice = createSlice({
    name: "repayUSDC",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUSDCBalance.fulfilled, (state, action) => {

        })
    }
});

export default repayUSDCSlice.reducer;