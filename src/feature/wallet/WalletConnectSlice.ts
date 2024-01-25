import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useWeb3Modal } from '@web3modal/wagmi/react'

interface Account {
    address: string;
}

interface WalletConnectState {
    account: Account | null,
    loading: boolean,
    error: string | null;
}

const initialState: WalletConnectState  = {
    account: null,
    loading: false,
    error: null,
}

export const connectWalletConnect = createAsyncThunk(
    'walletconnect/connect',
    async () => {
        try {
            //WC logic
            const { open } = useWeb3Modal();
            open();
        } catch (err) {
            console.log(err);
        }
});


export const walletConnectSlice: any = createSlice({
    name: 'WalletConnect',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(connectWalletConnect.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(connectWalletConnect.fulfilled, (state, action) => {
            state.loading = false;

        })
        .addCase(connectWalletConnect.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message!;

        })
    }
});

export default walletConnectSlice.reducer;