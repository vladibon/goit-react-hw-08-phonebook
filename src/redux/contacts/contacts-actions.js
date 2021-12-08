import { createAction } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 8);

export const addContact = createAction('contacts/add', contact => ({
  payload: { id: nanoid(), ...contact },
}));
export const deleteContact = createAction('contacts/delete');
// export const changeFilter = createAction('contacts/changeFilter');
