import { cUSDC } from '../../utils/web3/contract/contracts';
import { supplyBlanceSlice } from './supplyBalanceSlice';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface BorrowBalanceState {
  netBorrowBalance: number;
}

const initialState: BorrowBalanceState = {
  netBorrowBalance: 0,
};

export const updateBorrowBalance = createAsyncThunk(
    'borrowBalance/update',
    async (walletAddress: string) => {
        const rawBalance = await cUSDC.balanceOf(walletAddress);
        const borrowBalance = rawBalance / 1e18;
        return borrowBalance;
    }
);

export const borrowBalanceSlice = createSlice({
    name: "borrowBalance",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateBorrowBalance.fulfilled, (state, action) => {
            state.netBorrowBalance = action.payload;
        })

        // No case for pending

    // No case for pending

    builder.addCase(updateBorrowBalance.rejected, (state, action) => {
      state.netBorrowBalance = 0;
    });
  },
});

export default borrowBalanceSlice.reducer;
