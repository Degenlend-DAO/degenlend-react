import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface RepayUSDCState {
    status: string,
}

const initialState: RepayUSDCState = {
    status: 'initial',
}

export const approveUSDC = createAsyncThunk('usdc/approve', async () => {});

export const confirmUSDC = createAsyncThunk('usdc/confirm', async () => {});

export const repayUSDCSlice = createSlice({
    name: "repayUSDC",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
});

export default repayUSDCSlice.reducer;