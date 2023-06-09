import { RootState } from "@/data-access/redux/store";
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";

export interface CurrentUserState {
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  authenticated: boolean;
}

const initialState: CurrentUserState = {
  id: '',
  username: '',
  firstName: '',
  lastName: '',
  authenticated: false
}

const currentUser = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUserAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
    setCurrentUserUsername: (state, action) => {
      state.username = action.payload;
    },
    logoutCurrentUser:  () => initialState
  },
  extraReducers: {
    [HYDRATE]: (state, action ) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.currentUser,
      };
    }
  }
})

export const { setCurrentUserAuthenticated, setCurrentUserUsername, logoutCurrentUser } = currentUser.actions;
export const currentUserIsAuthenticated = (state: RootState) => Boolean(state.currentUser.authenticated);
export default currentUser;
