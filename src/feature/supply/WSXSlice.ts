import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, cerc20ABI, address } from '../../utils/web3';


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
        const WSX = new web3.eth.Contract(erc20ABI, contractAddress);
        const rawBalance = await WSX.methods.balanceOf(address.account).call();
        const balance = web3.utils.fromWei(rawBalance, "ether");
        const rawGasBalance = await web3.eth.getBalance(address.account);
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
            const supplyRatePerBlock: any = await cToken.methods.supplyRatePerBlock().call();
                console.log(supplyRatePerBlock)
            const borrowRatePerBlock: any = await cToken.methods.borrowRatePerBlock().call();
            supplyApy = (((Math.pow((supplyRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
            borrowApy = (((Math.pow((borrowRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
            console.log(`Supply APY for ETH ${supplyApy} %`);
            return supplyApy;
        } catch (error) {
            console.log(`ERROR: ${error}`);
            return supplyApy;
        }

  })



  // This doesn't work yet
export const approveWSX = createAsyncThunk('wSX/approve', async () => {

    const cWSX = new web3.eth.Contract(cerc20ABI, address.cERC20);
    const WSX = new web3.eth.Contract( erc20ABI , address.testnetSX);
    const myWalletAddress = '0x4869af0aed0a9948f724f809dc0dccf9885cce34';
    const spenderAddr = address.cERC20;
    const amount = 3 * 1e18;
    try {   
        await cWSX.methods.approve(spenderAddr, amount).send({
            from: myWalletAddress,
            gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
          });;
        await WSX.methods.approve(spenderAddr, amount).send({
            from: myWalletAddress,
            gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
          });
        } catch(error) {
            console.log(`ERRORh: ${error}`);
        }
});

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {});

export const WSXSlice = createSlice({
    name: "supplyWSX",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( updateWSXBalance.fulfilled, (state, action) => {
            state.wsxBalance = action.payload;
        })
        builder.addCase(updatewsxSupplyAPY.fulfilled, (state, action) => {
            state.supplyAPY = action.payload;
        })
    }
});

export default WSXSlice.reducer;