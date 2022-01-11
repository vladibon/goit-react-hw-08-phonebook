import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const { signUp, logIn, logOut, fetchCurrentUser } = authOperations;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRefreshed: false,
};

const { reducer } = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (s, { payload }) => {
        s.user = payload.user;
        s.token = payload.token;
      })
      .addCase(logIn.fulfilled, (s, { payload }) => {
        s.user = payload.user;
        s.token = payload.token;
      })
      .addCase(logOut.fulfilled, s => {
        s.user = { name: null, email: null };
        s.token = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (s, { payload }) => {
        s.user = payload;
        s.isRefreshed = true;
      })
      .addCase(fetchCurrentUser.rejected, s => {
        s.isRefreshed = true;
      });
  },
});

export default reducer;
