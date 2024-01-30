import { supplyBlanceSlice } from './supplyBalanceSlice';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { web3, erc20ABI, address } from '../../utils/web3';


interface BorrowBalanceState {
    netBorrowBalance: number,
}

const initialState: BorrowBalanceState = {
    netBorrowBalance: 0,
}

export const updateBorrowBalance = createAsyncThunk(
    'borrowBalance/update',
    async () => {
        
        const borrowBalance = 0;
        return borrowBalance;
    }
);

export const borrowBalanceSlice = createSlice({
    name: "borrowBalance",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateBorrowBalance.fulfilled, (state, action) => {
            state.netBorrowBalance = action.payload || 0;
        })
    }
});

export default borrowBalanceSlice.reducer;