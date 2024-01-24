import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    status: 'initial',
}



export const approveWSX = createAsyncThunk('wSX/approve', async () => {});


export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {});