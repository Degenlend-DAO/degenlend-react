import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SupplyWSXState {
    status: string
}

const initialState: SupplyWSXState = {
    status: 'initial',
}

export const approveWSX = createAsyncThunk('wSX/approve', async () => {});

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {});

export const supplyWSXSlice = createSlice({
    name: "supplyWSX",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
});

export default supplyWSXSlice.reducer;