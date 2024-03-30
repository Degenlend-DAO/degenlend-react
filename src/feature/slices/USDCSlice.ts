import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USDC, address, cUSDC, cerc20ABI, degenUSDC, erc20ABI, provider, web3 } from '../../utils/web3';
import { BrowserProvider, Contract, ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { Eip1193Provider } from 'web3/lib/commonjs/providers.exports';
import { MANTISSA } from '../../utils/constants';


// Interfaces
interface USDCState {
    status: string,
    usdcBalance: number,
    borrowBalance: number,
    borrowRate: number,
    supplyBalance: number,
    supplyRate: number,
}

interface approveUSDCParams {
    amount: number,
    addressToApprove: string,
}

const initialState: USDCState = {

    status: 'initial',
    borrowRate: 0.00,
    borrowBalance: 0.00,
    usdcBalance: 0.00,
    supplyBalance: 0,
    supplyRate: 0

}


// Views
export const updateUSDCBalance = createAsyncThunk(
    'usdcBalance/update',
    async () => {
        try {
            const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
            let walletAddress = accounts[0];
            const rawBalance = await USDC.balanceOf(walletAddress);
            const balance = web3.utils.fromWei(rawBalance, "Mwei");
            return Number(balance);
        } catch (error) {
            console.log`[Console] error invoking updateUSDCBalance: \n ${error}`
            return 0;
        }
    }
);

export const updateBorrowBalance = createAsyncThunk(
    'usdc/updateBorrowBalance',
    async () => {
        let borrowBalance = 0;
        try {
            const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
            let walletAddress = accounts[0];
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

export const updateBorrowRate = createAsyncThunk('usdc/updateBorrowAPY', async () => {

    let borrowRate = 0;

    try {
        borrowRate = await degenUSDC.borrowRatePerBlock();
        console.log(`Borrow APY for USDC ${borrowRate} %\n`);
        borrowRate = borrowRate / Math.pow(10, 8);
        return borrowRate;
    } catch (error) {
        console.log`[Console] error invoking updateusdcBorrowAPY: \n ${error}`
        return 0;
    }
});

export const updateSupplyRate = createAsyncThunk('usdc/updateSupplyRate', async () => {
    let supplyRate = 0;
    
    console.log(`Supply Rate for USDC: ${supplyRate}`)

    try {
        supplyRate = await degenUSDC.supplyRatePerBlock();
        
        return supplyRate;
    } catch (error) {
        
    }
    
    return supplyRate;
});

export const updateSupplyBalance = createAsyncThunk('usdc/updateSupplyBalance', async () => {
    try {
        
    } catch (error) {
        
    }

    return 1;
});



// Method calls

/// This function enables USDC to be engaged with
export const approveUSDC = createAsyncThunk('usdc/approve', async ({ amount, addressToApprove }: approveUSDCParams) => {
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

///////////  Supply Market Thunks

export const supplyUSDC = createAsyncThunk('usdc/supply', async (supplyAmount: number) => {
    
    const mintAmount = 0;

    //Provider must be variable, depending on metamask or walllet connect being connected
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);  
    const signer = await provider.getSigner();
    const signeddegenUSDC = new ethers.Contract(address.degenUSDC, cerc20ABI, signer);
    try {
        // Contract call 
        let txn: any = await signeddegenUSDC.mint(mintAmount);
        txn.wait(1);
        console.log(txn);
    } catch (error) {
        // txn rejected
            console.log(`[Console] Something went wrong: \n \n ${error}`);
    }
});

export const withdrawUSDC = createAsyncThunk('usdc/withdraw', async (withdrawAmount: number) => {

    const mintAmount = 0;

    //Provider must be variable, depending on metamask or walllet connect being connected
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);  
    const signer = await provider.getSigner();
    const signeddegenUSDC = new ethers.Contract(address.degenUSDC, cerc20ABI, signer);

    try {
        // Contract call 
        let txn: any = await signeddegenUSDC.redeemUnderlying(mintAmount);
        txn.wait(1);
        console.log(txn);
    } catch (error) {
        // txn rejected
            console.log(`[Console] Something went wrong: \n \n ${error}`);
    }
});


///////////  Borrow Market Thunks

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
    const scaledUpBorrowAmount = (borrowAmount * MANTISSA);
    try {
        const txn = await signedcUSDC.borrow(borrowAmount); // This code will work out fine
        await txn.wait(1);
        console.log(txn);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

/// Exporting the slice created
export const USDCSlice = createSlice({
    name: "USDC",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUSDCBalance.fulfilled, (state, action) => {
            state.usdcBalance = action.payload;
        })
        builder.addCase(updateBorrowRate.fulfilled, (state, action) => {
            console.log(`updateBorrowRate payload: ${action.payload}`);
            state.borrowRate = action.payload;
        })
        builder.addCase(updateSupplyRate.fulfilled, (state, action) => {
            state.supplyRate = action.payload;
        })
        builder.addCase(updateBorrowBalance.fulfilled, (state, action) => {
            state.borrowBalance = action.payload;
        })
        builder.addCase(updateSupplyBalance.fulfilled, (state, action) => {
            state.supplyBalance = action.payload;
        })
    }
});

export default USDCSlice.reducer;
