import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, addresses } from '../../utils/web3';


interface RepayUSDCState {
    status: string,
}

const initialState: RepayUSDCState = {
    status: 'initial',
}

export const updateUSDCBalance = createAsyncThunk(
    'usdcBalance/update',
    async () => {
        
        return 0;
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