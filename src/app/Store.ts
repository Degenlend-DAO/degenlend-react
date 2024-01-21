import { configureStore } from "@reduxjs/toolkit";
import metaMaskReducer from '../feature/MetaMaskSlice';
import walletConnectReducer from '../feature/WalletConnectSlice';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        metaMask: metaMaskReducer,
        walletConnect: walletConnectReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>