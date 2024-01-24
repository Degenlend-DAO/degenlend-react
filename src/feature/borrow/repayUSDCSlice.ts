import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    status: 'initial',
}


export const approveUSDC = createAsyncThunk('usdc/approve', async () => {});


export const confirmUSDC = createAsyncThunk('usdc/confirm', async () => {});