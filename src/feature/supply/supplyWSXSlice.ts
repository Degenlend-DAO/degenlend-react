import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { web3, erc20ABI, cerc20ABI, addresses } from '../../utils/eth';


interface SupplyWSXState {
    status: string,
    wsxBalance: number,
    supplyAPY: number,
}

const initialState: SupplyWSXState = {
    status: 'initial',
    wsxBalance: 0.00,
    supplyAPY: 0.00

}


export const updateWSXBalance = createAsyncThunk(
    'wsxBalance/update',
    async () => {
        
        const contractAddress = "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e"
        const WSX = new web3.eth.Contract(erc20ABI, contractAddress);
        const rawBalance = await WSX.methods.balanceOf('0x4869aF0Aed0a9948f724f809dC0DCcF9885cCe34').call();
        const balance = web3.utils.fromWei(rawBalance, "ether");
        const rawGasBalance = await web3.eth.getBalance('0x4869aF0Aed0a9948f724f809dC0DCcF9885cCe34');
        const gasBalance = web3.utils.fromWei(rawGasBalance, "ether");
        console.log(`wsx balance: ${balance}, raw balance: ${rawBalance}, gas balance: ${gasBalance}`);
        return gasBalance as unknown as number;
    }
);

export const updatewsxSupplyAPY = createAsyncThunk('wSX/updateSupplyAPY', async () => {
    const cWSX = new web3.eth.Contract(cerc20ABI, addresses.cERC20);

  })

export const approveWSX = createAsyncThunk('wSX/approve', async () => {
    const address = "0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e"
    const cWSX = new web3.eth.Contract(cerc20ABI, addresses.cERC20);
    const WSX = new web3.eth.Contract( erc20ABI , address);
    await cWSX.methods.approve();
    await WSX.methods.mint();
});

export const confirmWSX = createAsyncThunk('wSX/confirm', async () => {});

export const supplyWSXSlice = createSlice({
    name: "supplyWSX",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( updateWSXBalance.fulfilled, (state, action) => {
            state.wsxBalance = action.payload;
        })
    }
});

export default supplyWSXSlice.reducer;