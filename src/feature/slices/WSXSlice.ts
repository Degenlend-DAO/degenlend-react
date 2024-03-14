import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, cerc20ABI, address, provider, USDC, wSX, cWSX, comptroller } from '../../utils/web3';
import { Eip1193Provider, ethers } from 'ethers';

interface WSXState {
    status: string,
    wsxBalance: number,
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

}


export const updateWSXBalance = createAsyncThunk(
    'wsxBalance/update',
    async () => {
        const contractAddress = "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e"
        const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
        const WSX = new web3.eth.Contract(erc20ABI, contractAddress);
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
    async (myWalletAddress: string) => {

        const accounts = await (window as any).ethereum!.request({ method: 'eth_requestAccounts' });
        const cWSX = new web3.eth.Contract(erc20ABI, address.cwSX);
        try {
            const rawBalance = await cWSX.methods.balanceOf(accounts[0]).call();
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
        let supplyRate = 0;
        try {

            const supplyRatePerBlock = await cWSX.supplyRatePerBlock();
            console.log(`supply rate per block: ${supplyRatePerBlock}`)
            supplyRate = supplyRatePerBlock / 1e8;
            console.log(`Supply rate for wSX ${supplyRate} %`);
            return supplyRate;
        } catch (error) {
            console.log(`ERROR: ${error}`);
            return supplyRate;
        }

    })

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

// Method calls

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

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedWSX = new ethers.Contract(address.testnetWSX, erc20ABI, signer);

    try {
        const tx = await signedWSX.transfer();
        console.log(tx);
    } catch (error) {
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

// Supply Side Thunks

export const supplyWSX = createAsyncThunk('wSX/supply', async (supplyAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedCWSX = new ethers.Contract(address.cwSX, cerc20ABI, signer);
    const scaledUpSupplyAmount = (supplyAmount * 1e18);
    try {
        // Contract call
        // approve this address for spending first 
        const txn = await signedCWSX.mint(scaledUpSupplyAmount);
        txn.wait(1);
        console.log(txn);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: \n \n ${error}`);
    }
});

export const withdrawWSX = createAsyncThunk('wSX/withdraw', async (supplyAmount: number) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedcWSX = new ethers.Contract(address.cwSX, cerc20ABI, signer);
    const scaledUpSupplyAmount = (supplyAmount * 1e8);

    try {
        //Contract call
        const tx = await signedcWSX.redeem(scaledUpSupplyAmount);
        await tx.wait(1); // wait until the transaction has 1 confirmation on the blockchain
        console.log(tx);
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

// Borrow Side Thunks
export const repayWSX = createAsyncThunk('wSX/repay', async () => {
    
});

export const borrowWSX = createAsyncThunk('wSX/borrow', async () => {

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