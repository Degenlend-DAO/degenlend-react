import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { web3, address } from '../../utils/web3';

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
        
        return 0;
    }
);

export const netAPYSlice = createSlice({
    name: "netAPY",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updatenetAPY.fulfilled, (state, action) => {
            state.netAPY = action.payload;
        })
    }
});

export default netAPYSlice.reducer;