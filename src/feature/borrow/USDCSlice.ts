import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USDC, address, provider, usdcABI } from '../../utils/web3';
import { BrowserProvider, Contract, ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { Eip1193Provider } from 'web3/lib/commonjs/providers.exports';



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
    async (walletAddress:string ) => {
        try {
            const balance = await USDC.balanceOf(walletAddress);
            return balance as unknown as number;
        } catch (error) {
            console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
            return 0;
        }
    }
);

export const approveUSDC = createAsyncThunk('usdc/approve', async (myWalletAddress: string) => {
    try {
        const amount = 2000;
        const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
        const signer = await provider.getSigner();
        const signedUSDC = new ethers.Contract(address.testnetUSDC, usdcABI, signer);
        const tx = await signedUSDC.approve(
            myWalletAddress,
            ethers.parseEther(amount + '')
        );
        console.log(tx);
        } catch (error) {
        console.log(`something went wrong: ${error}`)
    }
});

export const confirmUSDC = createAsyncThunk('usdc/confirm', async () => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedUSDC = new ethers.Contract(address.testnetUSDC, usdcABI, signer);

    try {
        const tx = await signedUSDC.transfer();
        console.log(tx);
    } catch (error) {
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

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
