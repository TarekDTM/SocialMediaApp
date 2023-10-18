import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {registerUser} from './registerAction';
import {loginUser} from './loginAction';

// Define a type for the slice state
export interface PostsState {
  title: string;
  content: string;
  userId: string;
  error: string | null;
  success: boolean;
  loading: boolean
}

const initialState: PostsState = {
  loading: false,
  error: null,
  userId:'',
  content:'',
  title:'',
  success: false,
};

export const userSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers: {

  },
});


export default userSlice.reducer;

