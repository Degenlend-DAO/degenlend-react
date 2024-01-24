import { configureStore } from "@reduxjs/toolkit";
import metaMaskReducer from '../feature/wallet/MetaMaskSlice';
import walletConnectReducer from '../feature/wallet/WalletConnectSlice';
import supplyBalanceReducer from '../feature/dashboard/supplyBalanceSlice';
import borrowBalanceReducer from '../feature/dashboard/borrowBalanceSlice';
import borrowLimitReducer from '../feature/dashboard/borrowLimitSlice';
import netAPYReducer from '../feature/dashboard/netAPYSlice';
import supplyWSXReducer from '../feature/supply/supplyWSXSlice';
import withdrawWSXReducer from '../feature/supply/withdrawWSXSlice';
import borrowUSDCReducer from '../feature/borrow/borrowUSDCSlice';
import repayUSDCReducer from '../feature/borrow/repayUSDCSlice';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        metaMask: metaMaskReducer,
        walletConnect: walletConnectReducer,
        supplyBalance: supplyBalanceReducer,
        borrowBalance: borrowBalanceReducer,
        borrowLimit: borrowLimitReducer,
        netAPY: netAPYReducer,
        supplyWSX: supplyWSXReducer,
        withdrawWSX: withdrawWSXReducer,
        borrowUSDC: borrowUSDCReducer,
        repayUSDC: repayUSDCReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>