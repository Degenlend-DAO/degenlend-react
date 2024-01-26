import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import Comptroller from '../../contracts/Comptroller.json';

interface SupplyBalanceState {
    netSupplyBalance: number;
}

const initialState: SupplyBalanceState = {
    netSupplyBalance: 0,
}

export const updateSupplyBalance = createAsyncThunk(
    'supplyBalance/update',
    async () => {
        // Contract call
        const testnetAddress = Comptroller.address;
        const abi = Comptroller.abi;
        const ComptrollerContract = new ethers.Contract(testnetAddress,abi);
        return 1;
    }
);

export const supplyBlanceSlice = createSlice({
    name: "supplyBalance",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateSupplyBalance.fulfilled, (state, action) => {
            state.netSupplyBalance = action.payload || 0;
        })
    }
});

export default supplyBlanceSlice.reducer;