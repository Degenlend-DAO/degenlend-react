import { web3, erc20ABI, cerc20ABI, address, provider, comptroller, comptrollerABI } from './../../utils/web3';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Eip1193Provider, ethers } from 'ethers';


interface ComptrollerState {
    status: string,
    
}

const initialState: ComptrollerState = {
    status: 'initial',
}

// Method Calls
export const enterMarkets = createAsyncThunk('wSX/EnterMarkets', async () => {
    // Enter degenwSX-degenUSDC Market

    let marketsToEnter = [address.cwSX, address.cUSDC];
    try {
        let txn = await comptroller.enterMarkets(marketsToEnter);
        await txn.wait(1);
        console.log(txn);
    } catch (error) {
        console.log(`something went wrong: ${error}`)
    }
    console.log("Done");
})

export const exitMarkets = createAsyncThunk('wSX/ExitMarket', async () => {
    let marketToExit = address.cwSX;

    try {
        let txn = await comptroller.exitmarket(marketToExit);
        await txn.wait(1);
        console.log(txn);
    } catch (error) {
        console.log(`something went wrong: ${error}`);
    }
});


// Exporting the Comptroller Slice
export const ComptrollerSlice = createSlice({
    name: "Comptroller",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(enterMarkets.fulfilled, (state, action) => {
            state.status = 'active';
        })
        builder.addCase(enterMarkets.rejected, (state, action) => {
            state.status = 'inactive';
        })
    },
});

export default ComptrollerSlice.reducer;