import { RootState } from "@/data-access/redux/store";
import { createSlice } from '@reduxjs/toolkit'

export interface AuthUser {
  username: ''
}

export interface AuthState {
  authenticated: boolean;
}

const initialState: AuthState = {
  authenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    }
  }
})

export const { setAuthenticated } = authSlice.actions;
export const selectAuthenticated = (state: RootState) => state.auth.authenticated;
export default authSlice.reducer;
