import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Account {
    address: string;
}

interface MetaMaskState {
    account: Account | undefined;
    loading: boolean;
    error: string;
}

const initialState: MetaMaskState = {
    account: { address: "0x0000000000000000000000000000000000000000" },
    loading: false,
    error: ""
}

export const connectMetaMask = createAsyncThunk(
    'metaMask/connect',
    async () => {
        try {
            const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' }) as Account[];
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
                state.error = "";
            })
            .addCase(connectMetaMask.fulfilled, (state, action) => {
                state.loading = false;
                try {
                    const userAddress = action.payload?.address!;
                    const newAccount: Account = {
                        address: userAddress
                    }
                    state.account = newAccount;
                } catch (error) {
                    const userAddress = "0x0000000000000000000000000000000000000000";
                    const newAccount: Account = {
                        address: userAddress
                    }
                    state.account = newAccount;
                }

            })
            .addCase(connectMetaMask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message!;
            })
    }
});

export default metaMaskSlice.reducer;