import { address, modal } from "./../../utils/web3";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EMPTY_ADDRESS } from "../../utils/constants";

interface WalletState {
  address: string;
  loading: boolean;
  error: string;
  isConnected: boolean;
}

const initialState: WalletState = {
  address: EMPTY_ADDRESS,
  loading: false,
  error: "",
  isConnected: false,
};

export const connectMetaMask = createAsyncThunk<string, void>(
  "metaMask/connect",
  async () => {
    try {
      const accounts = await (window as any).ethereum!.request({
        method: "eth_requestAccounts",
      });
      address.account = accounts[0];
      console.log(accounts[0]);
      return accounts[0];
    } catch (err) {
      return EMPTY_ADDRESS;
    }
  },
);

export const connectWalletConnect = createAsyncThunk(
  "walletconnect/connect",
  async () => {
    try {
      modal.open();
      const accountAddress = modal.getAddress();
      return accountAddress || "";
    } catch (err) {
      console.log(err);
      return EMPTY_ADDRESS;
    }
  },
);

export const disconnectWallet = createAsyncThunk(
  "wallet/disconnect",
  async () => {
    return false;
  },
);

export const metaMaskSlice = createSlice({
  name: "metaMask",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(connectMetaMask.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(connectMetaMask.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
        state.isConnected = true;
      })
      .addCase(connectMetaMask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
        state.isConnected = false;
      })
      .addCase(connectWalletConnect.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
        state.isConnected = true;
      })
      .addCase(connectWalletConnect.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      })
      .addCase(disconnectWallet.fulfilled, (state, action) => {
        state.loading = false;
        state.isConnected = false;
        state.address = EMPTY_ADDRESS;
      });
  },
});

export default metaMaskSlice.reducer;
