import { createAction } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 8);

const addContact = createAction('contacts/add', contact => ({
  payload: { id: nanoid(), ...contact },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
