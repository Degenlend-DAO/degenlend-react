import { supplyBlanceSlice } from './supplyBalanceSlice';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    netBorrowBalance: 0,
}

export const updateBorrowBalance = createAsyncThunk(
    'borrowBalance/update',
    async () => {
        // Contract call
        return 0;
    }
);

export const borrowBlanceSlice: any = createSlice({
    name: "borrowBalance",
    initialState,
    reducers: {}
});

export default supplyBlanceSlice.reducer;