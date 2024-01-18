import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface Account {
    address: string;
}

interface MetaMaskState {
    account: Account | null;
    loading: boolean;
    error: string | null;
}

const initialState: MetaMaskState = {
    account: null,
    loading: false,
    error: null
}

export const connectMetaMask = createAsyncThunk(
    'metaMask/connect',
    async () => {
        try {
            const accounts = await window.ethereum!.request({ method: 'eth_requestAccounts' }) as Account[];
            console.log(accounts);
            return accounts[0];
        } catch (err) {
            console.log(err);
        }
    }
);

export const metaMaskSlice = createSlice({
    name: 'metaMask',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(connectMetaMask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(connectMetaMask.fulfilled, (state, action) => {
                state.loading = false;
                state.account = action.payload || null;
            })
            .addCase(connectMetaMask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message!;
            })
    }
});

export default metaMaskSlice.reducer;