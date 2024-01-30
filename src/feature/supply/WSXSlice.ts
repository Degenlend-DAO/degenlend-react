import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, cerc20ABI, address, provider, USDC, wSX } from '../../utils/web3';
import { Eip1193Provider, ethers } from 'ethers';


interface WSXState {
    status: string,
    wsxBalance: number,
    supplyBalance: number,
    supplyAPY: number,
    borrowBalance: number,
    borrowAPY: number,
}

const initialState: WSXState = {

    status: 'initial',
    wsxBalance: 0.00,
    supplyBalance: 0.00,
    supplyAPY: 0.00,
    borrowBalance: 0.00,
    borrowAPY: 0.00,

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

  export const updatewsxSupplyAPY2 = createAsyncThunk('wsxupdateSupplyAPY', async () => {
  }) 



export const approveWSX = createAsyncThunk('wSX/approve', async () => {
    const myWalletAddress = '0x4869aF0Aed0a9948f724f809dC0DCcF9885cCe34';

    try {
        const name = await wSX.name();
        const amount = 2000
        const balance = await wSX.balanceOf(myWalletAddress);
        const provider = new ethers.BrowserProvider(window.ethereum as unknown as Eip1193Provider);
        const signer = await provider.getSigner();
        const signedUSDC = new ethers.Contract(address.testnetUSDC, erc20ABI, signer);
        const tx = await signedUSDC.approve(
            myWalletAddress,
            ethers.parseEther(amount + '')
        );
        console.log(tx);
          console.log(tx);
          console.log(`balance:${balance}, and USDC: ${await USDC.balanceOf(myWalletAddress)}`);

    } catch (error) {
            console.log(`something went wrong: ${error}`)
    }
    console.log("Done");
});

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {

});

export const WSXSlice = createSlice({
    name: "supplyWSX",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateWSXBalance.fulfilled, (state, action) => {
            state.wsxBalance = action.payload;
        })
        builder.addCase(updatewsxSupplyAPY.fulfilled, (state, action) => {
            state.supplyAPY = action.payload;
        })
    }
});

export default WSXSlice.reducer;