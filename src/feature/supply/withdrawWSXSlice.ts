import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, addresses } from '../../utils/eth';
interface WithdrawWSXState {
    status: string
}

const initialState: WithdrawWSXState = {
    status: 'initial',
}

export const approveWSX = createAsyncThunk('wSX/approve', async () => {
      const WSX = new web3.eth.Contract(erc20ABI, addresses.cERC20);
});

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {});

export const withdrawWSXSlice = createSlice({
    name: "withdrawWSXSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
});

export default withdrawWSXSlice.reducer;