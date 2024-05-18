import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { address, cWSX, provider, web3} from '../../utils/web3';
import { Eip1193Provider, ethers } from 'ethers';
import { MANTISSA } from '../../utils/constants';
import { erc20ABI } from '@metamask/sdk-react-ui';
import { cerc20ABI } from '../../utils/web3/abi/cerc20abi';


// Interfaces                                                        
interface WSXState {
    status: string,
    wsxBalance: number,
    borrowBalance: number,
    borrowRate: number,
    supplyBalance: number,
    supplyRate: number,
}

interface approveWSXParams {
    amount: number,
    addressToApprove: string,
}

const initialState: WSXState = {

    status: 'initial',
    wsxBalance: 0.00,
    supplyBalance: 0.00,
    supplyRate: 0.00,
    borrowRate: 0.00,
    borrowBalance: 0.00,

}

// Views
export const updateWSXBalance = createAsyncThunk(
    'wsxBalance/update',
    async () => {
        const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
        const WSX = new web3.eth.Contract(erc20ABI, address.testnetWSX);
        const rawBalance = await WSX.methods.balanceOf(accounts[0]).call();
        const balance = web3.utils.fromWei(rawBalance, "ether");
        const rawGasBalance = await web3.eth.getBalance(accounts[0]);
        const gasBalance = web3.utils.fromWei(rawGasBalance, "ether");
        console.log(`wsx balance: ${balance}, raw balance: ${rawBalance}, gas balance: ${gasBalance}`);
        return Number(balance);
    }
);

export const updateSupplyBalance = createAsyncThunk(
    'supplyBalance/update',
    async () => {

        const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
        const degenWSX = new web3.eth.Contract(erc20ABI, address.cwSX);
        try {
            const rawBalance = await degenWSX.methods.balanceOf(accounts[0]).call();
            const supplyBalance = web3.utils.fromWei(rawBalance, "ether");
            console.log(`cwsx balance: ${supplyBalance}, raw balance: ${rawBalance}`);
            return Number(supplyBalance);

        } catch {
            console.log(`[Console] Unable to grab supply balance from the protocol`)
            return 0;
        }

    }
);

export const updatewsxsupplyRate = createAsyncThunk(
    'wSX/updatesupplyRate',
    async () => {
        try {

            const supplyRatePerBlock = await cWSX.supplyRatePerBlock();
            console.log(`supply rate per block: ${supplyRatePerBlock}`)
            return Number(supplyRatePerBlock);
        } catch (error) {
            console.log(`ERROR: ${error}`);
            return 0;
        }

    })

export const updateBorrowRate = createAsyncThunk('wsx/updateBorrowRate', async () => {
    try {
        const borrowRatePerBlock = await cWSX.borrowRatePerBlock();
        console.log(`Borrow rate per block: ${borrowRatePerBlock}`);
        return Number(borrowRatePerBlock);
    } catch (error) {
        console.log(`ERROR: ${error}`);
        return 0;
    }
});

export const updateBorrowBalance = createAsyncThunk('wsx/updateBorrowBalance', async () => {

    const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
        const degenWSX = new web3.eth.Contract(erc20ABI, address.cwSX);

    try {
        const rawBalance = await degenWSX.methods.borrowBalanceCurrent(accounts[0]).call();
        console.log(`Your borrow balance: ${rawBalance} Numbers(${Number(rawBalance)})`);
        return Number(rawBalance);
    } catch (error) {
        console.log(`ERROR: ${error}`);
        return 0;
    }

});

// Method calls


///////////  Approve WSX Thunks
export const approveWSX = createAsyncThunk('wSX/approve', async ({ amount, addressToApprove }: approveWSXParams) => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
        const signer = await provider.getSigner();
        const signedWSX = new ethers.Contract(address.testnetWSX, erc20ABI, signer);

        const txn = await signedWSX.approve(
            addressToApprove,
            ethers.parseEther(amount + '')
        );
        await txn.wait(1);
        console.log(txn);
    } catch (error) {
        console.log(`something went wrong: ${error}`)
    }
    console.log("Done");
});

///////////  Supply Market Thunks

export const supplyWSX = createAsyncThunk('wSX/supply', async (supplyAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedCWSX = new ethers.Contract(address.degenWSX, cerc20ABI, signer);
    try {
        // Contract call
        // approve this address for spending first 
        const txn = await signedCWSX.mint(supplyAmount);
        txn.wait(1);
        console.log(txn);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: \n \n ${error}`);
    }
});

export const withdrawWSX = createAsyncThunk('wSX/withdraw', async (withdrawAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedcWSX = new ethers.Contract(address.degenWSX, cerc20ABI, signer);
    try {
        //Contract call
        const tx = await signedcWSX.redeemUnderlying(withdrawAmount);
        await tx.wait(1); // wait until the transaction has 1 confirmation on the blockchain
        console.log(tx);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

///////////  Borrow Market Thunks

export const repayWSX = createAsyncThunk('wSX/repay', async (repayAmount: number) => {
    
    const signer = await provider.getSigner();
    const signeddegenWSX = new ethers.Contract(address.degenWSX, cerc20ABI, signer);

    try {
            let txn:any = await signeddegenWSX.repayBorrow(repayAmount);
            await txn.wait(1);
            console.log(txn);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

export const borrowWSX = createAsyncThunk('wSX/borrow', async (borrowAmount: number) => {
    
    const signer = await provider.getSigner();
    const signeddegenWSX = new ethers.Contract(address.degenWSX, cerc20ABI, signer);
    
    try {
            let txn:any = await signeddegenWSX.borrow(borrowAmount);
            await txn.wait(1);
            console.log(txn);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

/// Exporting the slice created
export const WSXSlice = createSlice({
    name: "WSX",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateWSXBalance.fulfilled, (state, action) => {
            state.wsxBalance = action.payload;

        })
        builder.addCase(updatewsxsupplyRate.fulfilled, (state, action) => {
            state.supplyRate = action.payload;
        })
        builder.addCase(updateSupplyBalance.fulfilled, (state, action) => {
            state.supplyBalance = action.payload;
        })
        
        builder.addCase(updateBorrowRate.fulfilled, (state, action) => {
            state.borrowRate = action.payload;
        })
        builder.addCase(updateBorrowBalance.fulfilled, (state, action) => {
            state.borrowBalance = action.payload;
        })

        //Actions

        builder.addCase(approveWSX.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(approveWSX.rejected, (state, action) => {
            state.status = "failed";
        })
        builder.addCase(approveWSX.fulfilled, (state, action) => {
            state.status = "completed";
        })
    }
});

export default WSXSlice.reducer;