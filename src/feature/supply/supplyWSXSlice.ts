import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SupplyWSXState {
    status: string,
    wsxBalance: number,
    supplyAPY: number,
}

const initialState: SupplyWSXState = {
    status: 'initial',
    wsxBalance: 0.00,
    supplyAPY: 0.00

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