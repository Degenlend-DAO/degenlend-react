import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USDC, address, cUSDC, cerc20ABI, erc20ABI, provider, web3 } from '../../utils/web3';
import { BrowserProvider, Contract, ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { Eip1193Provider } from 'web3/lib/commonjs/providers.exports';



interface USDCState {
    status: string,
    usdcBalance: number,
    borrowBalance: number,
    borrowRate: number,

}

const initialState: USDCState = {
    status: 'initial',
    borrowRate: 0.00,
    borrowBalance: 0.00,
    usdcBalance: 0.00,
}


// Views
export const updateUSDCBalance = createAsyncThunk(
    'usdcBalance/update',
    async (walletAddress:string) => {
        try {
            const rawBalance = await USDC.balanceOf(walletAddress);
            const balance = web3.utils.fromWei(rawBalance, "Mwei");
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
             const rawBorrowBalance = await cUSDC.borrowBalanceCurrent(walletAddress);
             borrowBalance = rawBorrowBalance / 10e8 // raw balance / 8 decimals (all cTokens are set to 8 decimals)
            console.log(`cUSDC Balance: ${borrowBalance}`);
        } catch (error) {
             borrowBalance = 0;
             console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
        }
        return borrowBalance;
    }
);

export const updateusdcBorrowRate = createAsyncThunk('usdc/updateBorrowAPY', async () => {

    let borrowRate = 0;

    console.log(`Borrow APY for USDC ${borrowRate} %\n`);
    try {
        let borrowRate = await cUSDC.borrowRatePerBlock();
        borrowRate = borrowRate / Math.pow(10, 8);
        return borrowRate;
    } catch (error) {
        console.log`[Console] error invoking updateusdcBorrowAPY: \n ${error}`
    }
});



// Method calls

/// This function enables USDC to be engaged with
export const approveUSDC = createAsyncThunk('usdc/approve', async ({amount, addressToApprove}: {amount: number, addressToApprove: string}) => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
        const signer = await provider.getSigner();
        const signedUSDC = new ethers.Contract(address.testnetUSDC, erc20ABI, signer);

        const tx = await signedUSDC.approve(
            addressToApprove,
            ethers.parseEther(amount + '')
        );
        await tx.wait(1);
        console.log(tx);
        } catch (error) {
        console.log(`something went wrong: ${error}`)
    }
});

/// This function repays the USDC balance
export const repayUSDC = createAsyncThunk('usdc/repay', async (borrowAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedcUSDC = new ethers.Contract(address.cUSDC, cerc20ABI, signer);
    const scaledUpBorrowAmount = (borrowAmount * Math.pow(10, 18)).toString();

    try {
        const txn = await signedcUSDC.repayBorrow(borrowAmount);
        await txn.wait(1);
        console.log(txn);
    } catch (error) {
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

/// This function allows you to borrow usdc 
export const borrowUSDC = createAsyncThunk('usdc/borrow', async (borrowAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedcUSDC = new ethers.Contract(address.cUSDC, cerc20ABI, signer);
    const scaledUpBorrowAmount = (borrowAmount * 10e18);
    try {
        const txn = await signedcUSDC.borrow(scaledUpBorrowAmount); // This code will work out fine
        await txn.wait(1);
        console.log(txn);
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
            state.usdcBalance = action.payload;
        })
        builder.addCase(updateusdcBorrowRate.fulfilled, (state, action) => {
            console.log(`updateusdcBorrowRate payload: ${action.payload}`);
            state.borrowRate = action.payload;
        })
        builder.addCase(updateBorrowBalance.fulfilled, (state, action) => {
            state.borrowBalance = action.payload;
        })
    }
});

export default USDCSlice.reducer;
