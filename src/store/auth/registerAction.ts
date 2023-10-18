import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import auth from '@react-native-firebase/auth';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const data = await auth().createUserWithEmailAndPassword(email, password);
      return data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
