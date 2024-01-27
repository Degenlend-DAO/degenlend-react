import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, cerc20ABI, address } from '../../utils/web3';



interface USDCState {
    status: string,
    borrowAPY: number,
    supplyAPY: number,
    usdcBalance: number,
}

const initialState: USDCState = {
    status: 'initial',
    borrowAPY: 0.00,
    supplyAPY: 0.00,
    usdcBalance: 0.00,
}

export const updateUSDCBalance = createAsyncThunk(
    'usdcBalance/update',
    async () => {
        const USDC = new web3.eth.Contract(erc20ABI, address.testnetUSDC);
        const rawBalance = await USDC.methods.balanceOf(address.account).call();
        const balance = web3.utils.fromWei(rawBalance, "ether");
        console.log(`usdc balance: ${balance}, raw balance: ${rawBalance}`);

        return balance as unknown as number
    }
);

export const approveUSDC = createAsyncThunk('usdc/approve', async () => {});

export const confirmUSDC = createAsyncThunk('usdc/confirm', async () => {});

export const USDCSlice = createSlice({
    name: "USDC",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUSDCBalance.fulfilled, (state, action) => {
            state.usdcBalance = action.payload;
        })
    }
});

export default USDCSlice.reducer;