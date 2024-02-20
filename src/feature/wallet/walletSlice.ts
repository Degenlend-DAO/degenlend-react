import { address, modal } from './../../utils/web3';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface WalletState {
    address: string;
    loading: boolean;
    error: string;
    isConnected: boolean;
}

const initialState: WalletState = {
    address: "0x0000000000000000000000000000000000000000" ,
    loading: false,
    error: "",
    isConnected: false,
}

export const connectMetaMask = createAsyncThunk<string, void>(
    'metaMask/connect',
    async () => {
        try {

            const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
            address.account = accounts[0]; // Sets account address 
            console.log(accounts[0]);
            return accounts[0];
        } catch (err) {
            return "0x0000000000000000000000000000000000000000";
        }
    }
);


export const connectWalletConnect = createAsyncThunk(
    'walletconnect/connect',
    async () => {
        try {
            //WC logic
            modal.open()
            const accountAddress = modal.getAddress()
            return accountAddress as unknown as string;
        } catch (err) {
            console.log(err);
            return "0x0000000000000000000000000000000000000000";
        }
});


export const disconnectWallet = createAsyncThunk(
    'wallet/disconnect',
    async () => {
        return false;
});

export const metaMaskSlice = createSlice({
    name: 'metaMask',
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
                state.address = "0x0000000000000000000000000000000000000000"; // Resets the token address
            })
    }
});

export default metaMaskSlice.reducer;
