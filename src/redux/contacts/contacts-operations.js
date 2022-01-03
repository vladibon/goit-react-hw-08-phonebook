import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {}
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async contactId => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {}
});

const updateContact = createAsyncThunk('contacts/updateContact', async ({ contactId, contact }) => {
  try {
    const { data } = await axios.patch(`/contacts/${contactId}`, contact);
    return data;
  } catch (error) {}
});

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
};
export default contactsOperations;
