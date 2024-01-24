import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    status: 'initial',
    balance: 0,
}

export const approveUSDC = createAsyncThunk('usdc/approve', async () => {
    // Contract call
    alert('your usdc has been approved!');
});


export const confirmUSDC = createAsyncThunk('usdc/confirm', async () => {
    // Contract call
    alert('your usdc has been confirmed!');
});

export const borrowUSDCSlice = createSlice({
    name: 'borrowUSDC',
    initialState,
    reducers: {
        increment: (state) => {
            state.balance += 1;
        }
    },
    extraReducers: (builder) => {},
});