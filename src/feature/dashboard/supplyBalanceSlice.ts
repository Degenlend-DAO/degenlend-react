import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Account {
    address: string;
}

const initialState = {
    netSupplyBalance: 0,
}

export const updateSupplyBalance = createAsyncThunk(
    'supplyBalance/update',
    async () => {
        // Contract call
        return 0;
    }
);

export const supplyBlanceSlice: any = createSlice({
    name: "supplyBalance",
    initialState,
    reducers: {},
});

export default supplyBlanceSlice.reducer;