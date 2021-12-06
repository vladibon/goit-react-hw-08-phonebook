import { customAlphabet } from 'nanoid';
import types from './types';

const nanoid = customAlphabet('0123456789', 8);

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: { contactId },
});

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

export { addContact, deleteContact, changeFilter };
