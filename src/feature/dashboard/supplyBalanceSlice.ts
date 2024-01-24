import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface SupplyBalanceState {
    netSupplyBalance: number;
}

const initialState: SupplyBalanceState = {
    netSupplyBalance: 0,
}

export const updateSupplyBalance = createAsyncThunk(
    'supplyBalance/update',
    async () => {
        // Contract call
        return 0;
    }
);

export const supplyBlanceSlice = createSlice({
    name: "supplyBalance",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateSupplyBalance.fulfilled, (state, action) => {
            state.netSupplyBalance = action.payload || 0;
        })
    }
});

export default supplyBlanceSlice.reducer;