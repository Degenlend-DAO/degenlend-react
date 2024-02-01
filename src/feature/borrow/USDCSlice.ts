import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USDC, address, cUSDC, cerc20ABI, provider, usdcABI, web3 } from '../../utils/web3';
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
             borrowBalance = await cUSDC.balanceOf(walletAddress);
            console.log(`cUSDC Balance: ${borrowBalance}`);
        } catch (error) {
             borrowBalance = 0;
             console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
        }
        return borrowBalance;
    }
);

export const updateusdcBorrowAPY = createAsyncThunk('usdc/updateBorrowAPY', async () => {
    let borrowAPY = 0;
    const blocksPerDay = 4 * 60 * 24; // 4 blocks in 1 minute
    const daysPerYear = 365;
    const ethDecimals = 18;
    const ethMantissa = Math.pow(10, ethDecimals); // 1 * 10 ^ 18
    let underlying;

    console.log(`Borrow APY for USDC ${borrowAPY} %\n`);
    try {
        const cToken = new web3.eth.Contract(cerc20ABI, address.cUSDC);
        // const supplyRatePerBlock:any = await cToken.methods.supplyRatePerBlock().call();
        const borrowRatePerBlock:any = await cToken.methods.borrowRatePerBlock().call();
        // supplyApy = (((Math.pow((supplyRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear - 1))) - 1) * 100;
        borrowAPY = (((Math.pow((borrowRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear - 1))) - 1) * 100;
        // console.log(`Supply APY for USDC ${supplyApy} %`);
        console.log(`Borrow APY for USDC ${borrowAPY} %\n`);
        console.log(`borrows: ${borrowAPY}`);
    } catch (error) {
        let borrowAPY = 0;
        console.log`[Console] error invoking updateusdcBorrowAPY: \n ${error}`
    }
    return borrowAPY;
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
        await tx.wait(1);
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
        await tx.wait(1);
        console.log(tx);
    } catch (error) {
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

export const borrowUSDC = createAsyncThunk('usdc/borrow', async (borrowAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedUSDC = new ethers.Contract(address.cUSDC, cerc20ABI, signer);
    const scaledUpBorrowAmount = (borrowAmount * Math.pow(10, 18)).toString();
    try {
        const tx = await signedUSDC.borrow(scaledUpBorrowAmount);
        await tx.wait(1);
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
            state.usdcBalance = action.payload;
        })
        builder.addCase(updateusdcBorrowAPY.fulfilled, (state, action) => {
            console.log(`updateusdcBorrowAPY payload: ${action.payload}`);
            state.borrowAPY = action.payload;
        })
        builder.addCase(updateBorrowBalance.fulfilled, (state, action) => {
            state.borrowBalance = action.payload;
        })
    }
});

export default USDCSlice.reducer;
