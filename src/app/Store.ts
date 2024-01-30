import { configureStore } from "@reduxjs/toolkit";
import metaMaskReducer from '../feature/wallet/walletSlice';
import supplyBalanceReducer from '../feature/dashboard/supplyBalanceSlice';
import borrowBalanceReducer from '../feature/dashboard/borrowBalanceSlice';
import borrowLimitReducer from '../feature/dashboard/borrowLimitSlice';
import netAPYReducer from '../feature/dashboard/netAPYSlice';
import WSXReducer from '../feature/supply/WSXSlice';
import USDCReducer from '../feature/borrow/USDCSlice';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        metaMask: metaMaskReducer,
        supplyBalance: supplyBalanceReducer,
        borrowBalance: borrowBalanceReducer,
        borrowLimit: borrowLimitReducer,
        netAPY: netAPYReducer,
        WSX: WSXReducer,
        USDC: USDCReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>