import { RootState } from "@/data-access/redux/store";
import { Product } from "@/types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";

const initialState: Record<string, Product> = {}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state[action.payload.id] = action.payload;
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      delete state[action.payload.id]
    },
    reset: (state) => {
      state = {};
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action ) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.products,
      };
    }
  }
})

export const { addProduct, removeProduct, reset } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice;
