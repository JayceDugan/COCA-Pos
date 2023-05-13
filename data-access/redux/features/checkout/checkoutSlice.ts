import { RootState } from "@/data-access/redux/store";
import { Product } from "@/types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CheckoutLineItem extends Product {
  quantity: number,
}

export interface CheckoutState {
  id: string,
  customer: {
    name: string
  },
  lineItems: Record<string, CheckoutLineItem>
  note: string,
  subtotal: number,
  tax: number,
  total: number,
}

const initialState: CheckoutState = {
  id: '',
  customer: {
    name: '',
  },
  lineItems: {},
  subtotal: 62.13,
  tax: 1.87,
  total: 64.00,
  note: ''
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload
    },
    setCustomerName: (state, action) => {
      state.customer.name = action.payload
    },
    setNote: (state, action) => {
      state.note = action.payload;
    },
    addLineItem: (state, action: PayloadAction<Product>) => {
      if (action.payload.id in state.lineItems) {
        state.lineItems[action.payload.id].quantity++;
      } else {
        state.lineItems[action.payload.id] = {
          ...action.payload,
          quantity: 1
        }
      }
    },
    incrementLineItemQuantity: (state, action: PayloadAction<Product>) => {
      state.lineItems[action.payload.id].quantity++;
    },
    decrementLineItemQuantity: (state, action: PayloadAction<Product>) => {
      state.lineItems[action.payload.id].quantity--;

      if (state.lineItems[action.payload.id].quantity <= 0) {
        delete state.lineItems[action.payload.id];
      }
    }
  }
})

export const { setId, setCustomerName, setNote, addLineItem, incrementLineItemQuantity, decrementLineItemQuantity} = checkoutSlice.actions;
export const selectCheckoutLineItems = (state: RootState) => state.checkout.lineItems;
export default checkoutSlice.reducer;
