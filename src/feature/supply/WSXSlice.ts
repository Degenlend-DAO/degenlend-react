import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, cerc20ABI, address, provider, USDC, wSX } from '../../utils/web3';
import { Eip1193Provider, ethers } from 'ethers';
import { create } from 'domain';
import { createBuilderStatusReporter } from 'typescript';


interface WSXState {
    status: string,
    wsxBalance: number,
    supplyBalance: number,
    supplyAPY: number,
}

const initialState: WSXState = {

    status: 'initial',
    wsxBalance: 0.00,
    supplyBalance: 0.00,
    supplyAPY: 0.00,

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
        return gasBalance as unknown as number;
    }
);

export const updateSupplyBalance = createAsyncThunk(
    'supplyBalance/update',
    async () => {
        const supplyBalance = 0;

        return supplyBalance;
    }
);

// This doesn't work yet
export const updatewsxSupplyAPY = createAsyncThunk(
    'wSX/updateSupplyAPY',
    async () => {
    const ethMantissa = 1e18;
    const blocksPerDay = 7200; // 12 seconds per block
    const daysPerYear = 365;
    const cEthAddress = address.cERC20;
    let supplyApy = 0;
    let borrowApy = 0;
    try {
            const cToken = new web3.eth.Contract(cerc20ABI, cEthAddress);
            const supplyRatePerBlock:any = await cToken.methods.supplyRatePerBlock().call();
            console.log(`supply rate per block: ${supplyRatePerBlock}`)
            supplyApy = (((Math.pow((supplyRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
            console.log(`Supply APY for ETH ${supplyApy} %`);
            return supplyApy;
        } catch (error) {
            console.log(`ERROR: ${error}`);
            return supplyApy;
        }

  })


// Method calls

export const approveWSX = createAsyncThunk('wSX/approve', async (myWalletAddress:string ) => {

    try {
        const name = await wSX.name();
        const amount = 2000
        const balance = await wSX.balanceOf(myWalletAddress);
        const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
        const signer = await provider.getSigner();
        const signedWSX = new ethers.Contract(address.testnetSX, erc20ABI, signer);
        const tx = await signedWSX.approve(
            myWalletAddress,
            ethers.parseEther(amount + '')
        );
        console.log(tx);
    } catch (error) {
            console.log(`something went wrong: ${error}`)
    }
    console.log("Done");
});

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedWSX = new ethers.Contract(address.testnetSX, erc20ABI, signer);

    try {
        const tx = await signedWSX.transfer();
        console.log(tx);
    } catch (error) {
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

export const supplyWSX = createAsyncThunk('wSX/supply', async (myWalletAddress: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedWSX = new ethers.Contract(address.testnetSX, erc20ABI, signer);

    try {
        
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

export const withdrawWSX = createAsyncThunk('wSX/withdraw', async (myWalletAddress: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    const signer = await provider.getSigner();
    const signedWSX = new ethers.Contract(address.testnetSX, erc20ABI, signer);
    try {
        
    } catch (error) {
        // txn rejected
        console.log(`[Console] Something went wrong: ${error}`);
    }
});

export const WSXSlice = createSlice({
    name: "WSX",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateWSXBalance.fulfilled, (state, action) => {
            state.wsxBalance = action.payload;
        })
        builder.addCase(updatewsxSupplyAPY.fulfilled, (state, action) => {
            state.supplyAPY = action.payload;
        })
        builder.addCase(updateSupplyBalance.fulfilled, (state, action) => {
            state.supplyBalance = action.payload;
        })
    }
});

export default WSXSlice.reducer;