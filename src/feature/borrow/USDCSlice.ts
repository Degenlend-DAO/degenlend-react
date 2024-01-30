import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USDC, address, cUSDC, cerc20ABI, provider, usdcABI } from '../../utils/web3';
import { BrowserProvider, Contract, ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { Eip1193Provider } from 'web3/lib/commonjs/providers.exports';



interface USDCState {
    status: string,
    usdcBalance: number,
    borrowBalance: number,
    borrowAPY: number,

}

const initialState: USDCState = {
    status: 'initial',
    borrowAPY: 0.00,
    borrowBalance: 0.00,
    usdcBalance: 0.00,
}


// Views
export const updateUSDCBalance = createAsyncThunk(
    'usdcBalance/update',
    async (walletAddress:string) => {
        try {
            const balance = await USDC.balanceOf(walletAddress);
            console.log(`USDC Balance: ${balance}`);
            return balance as unknown as number;
        } catch (error) {
            console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
            return 0;
        }
    }
);

export const updateBorrowBalance = createAsyncThunk(
    'supplyBalance/update',
    async (walletAddress: string) => {
        let borrowBalance = 0;
        try {
             borrowBalance = await cUSDC.balanceOf(walletAddress);
            console.log(`cUSDC Balance: ${borrowBalance}`);
        } catch (error) {
             borrowBalance = 0;
             console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
        }
        return borrowBalance;
    }
);

export const updateusdcBorrowAPY = createAsyncThunk('usdc/updateBorrowAPY', async (walletAddress:string) => {
    const borrowRate = 0;
    try {
        const borrowRate = await cUSDC.borrowBalanceCurrent(walletAddress);
        console.log(`borrows: ${borrowRate}`);
    } catch (error) {
        const borrowRate = 0;
        console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
    }
    return borrowRate;
});



// Method calls

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

export const repayUSDC = createAsyncThunk('usdc/repay', async (borrowAmount: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedUSDC = new ethers.Contract(address.testnetUSDC, usdcABI, signer);

    try {
        const tx = await signedUSDC.repayBorrow(borrowAmount);
        console.log(tx);
    } catch (error) {
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

export const borrowUSDC = createAsyncThunk('usdc/borrow', async (borrowAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedUSDC = new ethers.Contract(address.cUSDC, cerc20ABI, signer);
    try {
        const tx = await signedUSDC.borrow(borrowAmount);
        console.log(tx);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

export const USDCSlice = createSlice({
    name: "USDC",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUSDCBalance.fulfilled, (state, action) => {
            console.log(`Payload USDC Balance: ${action.payload}`);
            state.usdcBalance = action.payload;
        })
        builder.addCase(updateusdcBorrowAPY.fulfilled, (state, action) => {
            state.borrowAPY = action.payload;
        })
        builder.addCase(updateBorrowBalance.fulfilled, (state, action) => {
            state.borrowBalance = action.payload;
        })
    }
});

export default USDCSlice.reducer;
