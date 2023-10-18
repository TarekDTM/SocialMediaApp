import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {registerUser} from './registerAction';
import {loginUser} from './loginAction';

// Define a type for the slice state
export interface UserState {
  loading: boolean;
  userInfo: any | null;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

const initialState: UserState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [loginUser.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [loginUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;
export * from './loginAction';
export * from './registerAction';
