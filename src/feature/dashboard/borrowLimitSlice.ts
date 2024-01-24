import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface BorrowLimitState {
    borrowLimit: number,
}

const initialState: BorrowLimitState = {
    borrowLimit: 0,
}

export const updateborrowLimit = createAsyncThunk(
    'borrowLimit/update',
    async () => {
        // Contract call
        return 0;
    }
);

export const borrowLimitSlice = createSlice({
    name: "borrowLimit",
    initialState,
    reducers: {}
});

export default borrowLimitSlice.reducer;