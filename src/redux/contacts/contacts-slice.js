import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';
import { authOperations } from 'redux/auth';

const initialState = {
  items: [],
  filter: '',
};

const { actions, reducer } = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (s, { payload }) => {
      s.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(contactsOperations.fetchContacts.fulfilled, (s, { payload }) => {
        s.items = payload;
      })
      .addCase(contactsOperations.addContact.fulfilled, (s, { payload }) => {
        s.items.push(payload);
      })
      .addCase(contactsOperations.deleteContact.fulfilled, (s, { payload }) => {
        s.items = s.items.filter(({ id }) => id !== payload);
      })
      .addCase(authOperations.logOut.fulfilled, () => initialState);
  },
});

export const { changeFilter } = actions;
export default reducer;
