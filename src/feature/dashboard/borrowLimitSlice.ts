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
        return 1;
    }
);

export const borrowLimitSlice = createSlice({
    name: "borrowLimit",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateborrowLimit.fulfilled, (state, action) => {
            state.borrowLimit = action.payload || 0;
        })
    }
});

export default borrowLimitSlice.reducer;