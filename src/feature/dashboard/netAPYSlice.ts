import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { web3, address } from '../../utils/web3';

import JumpRateModelV2 from '../../contracts/JumpRateModelV2.json';

interface netAPRState {
    status: string;
    netAPR: number;
}

interface updateNetAPRParams {
    supplyRate: number,
    borrowRate: number,
}

const initialState: netAPRState = {
    status: "initial",
    netAPR: 0,
}

export const updatenetAPR = createAsyncThunk(
    'netAPR/update',
    async ({ supplyRate, borrowRate }: updateNetAPRParams) => {
        // Basically netAPR is supply - borrow rate
        if (Number.isNaN(supplyRate) || Number.isNaN(borrowRate)) { return 0 }
        const netAPR = supplyRate - borrowRate
        if (netAPR < 0 || Number.isNaN(netAPR)) { return 0 }
        return netAPR;
    }
);

export const netAPRSlice = createSlice({
    name: "netAPR",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updatenetAPR.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(updatenetAPR.fulfilled, (state, action) => {
            state.netAPR = action.payload;
            state.status = 'success';
        })
        builder.addCase(updatenetAPR.rejected, (state, action) => {
            state.status = 'failed';
            state.netAPR = 0;
        })
    }
});

export default netAPRSlice.reducer;