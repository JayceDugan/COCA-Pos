import checkoutSlice from "@/data-access/redux/features/checkout/checkoutSlice";
import currentUserSlice from "@/data-access/redux/features/currentUser/currentUser";
import productsSlice from "@/data-access/redux/features/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    checkout: checkoutSlice,
    products: productsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

