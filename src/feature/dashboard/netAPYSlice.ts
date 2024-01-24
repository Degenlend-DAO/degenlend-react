import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    netAPY: 0,
}

export const updatenetAPY = createAsyncThunk(
    'netAPY/update',
    async () => {
        // Contract call
        return 0;
    }
);

export const netAPYSlice = createSlice({
    name: "netAPY",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updatenetAPY.fulfilled, (state, action) => {
            state.netAPY = action.payload || 0;
        })
    }
});

export default netAPYSlice.reducer;