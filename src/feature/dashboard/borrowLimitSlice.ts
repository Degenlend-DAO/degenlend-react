import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    borrowLimit: 0,
}

export const updateborrowLimit = createAsyncThunk(
    'borrowLimit/update',
    async () => {
        // Contract call
        return 0;
    }
);

export const borrowLimitSlice: any = createSlice({
    name: "borrowLimit",
    initialState,
    reducers: {}
});

export default borrowLimitSlice.reducer;