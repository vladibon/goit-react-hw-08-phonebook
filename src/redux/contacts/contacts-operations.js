import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://61b30c4caf5ff70017ca1c78.mockapi.io';
const pathname = 'contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get(pathname);
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post(pathname, contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const { data } = await axios.delete(`${pathname}/${contactId}`);
    return data.id;
  },
);
