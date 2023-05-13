import authSlice from "@/data-access/redux/features/auth/authSlice";
import checkoutSlice from "@/data-access/redux/features/checkout/checkoutSlice";
import productsSlice from "@/data-access/redux/features/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    checkout: checkoutSlice,
    products: productsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

