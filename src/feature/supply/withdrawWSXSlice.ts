import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface WithdrawWSXState {
    status: string
}

const initialState: WithdrawWSXState = {
    status: 'initial',
}

export const approveWSX = createAsyncThunk('wSX/approve', async () => {});

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {});

export const withdrawWSXSlice = createSlice({
    name: "withdrawWSXSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
});

export default withdrawWSXSlice.reducer;