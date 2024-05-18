import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import Comptroller from '../../contracts/Comptroller.json';
import { address } from "../../utils/web3";
import { cWSX } from "../../utils/web3/contract/contracts";

interface SupplyBalanceState {
  netSupplyBalance: number;
}

const initialState: SupplyBalanceState = {
  netSupplyBalance: 0,
};

export const updateSupplyBalance = createAsyncThunk(
    'supplyBalance/update',
    async (walletAddress: string) => {
        const rawBalance = await cWSX.balanceOf(walletAddress);
        const supplyBalance = rawBalance / 1e18;
        return supplyBalance;
    }
);

export const supplyBlanceSlice = createSlice({
  name: "supplyBalance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateSupplyBalance.fulfilled, (state, action) => {
      state.netSupplyBalance = action.payload;
    });

    builder.addCase(updateSupplyBalance.rejected, (state, action) => {
      state.netSupplyBalance = 0;
    });
  },
});

export default supplyBlanceSlice.reducer;
