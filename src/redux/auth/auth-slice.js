import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRefreshed: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (s, { payload }) => {
        s.user = payload.user;
        s.token = payload.token;
      })
      .addCase(authOperations.logIn.fulfilled, (s, { payload }) => {
        s.user = payload.user;
        s.token = payload.token;
      })
      .addCase(authOperations.logOut.fulfilled, s => {
        s.user = { name: null, email: null };
        s.token = null;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (s, { payload }) => {
        s.user = payload;
        s.isRefreshed = true;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, s => {
        s.isRefreshed = true;
      });
  },
});

export default authSlice.reducer;