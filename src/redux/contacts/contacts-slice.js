import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';
import { authOperations } from 'redux/auth';

const { fetchContacts, addContact, deleteContact } = contactsOperations;
const { logOut } = authOperations;

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
      .addCase(fetchContacts.fulfilled, (s, { payload }) => {
        s.items = payload;
      })
      .addCase(addContact.fulfilled, (s, { payload }) => {
        s.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (s, { payload }) => {
        s.items = s.items.filter(({ id }) => id !== payload);
      })
      .addCase(logOut.fulfilled, () => initialState);
  },
});

export const { changeFilter } = actions;
export default reducer;
