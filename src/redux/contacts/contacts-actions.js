import { customAlphabet } from 'nanoid';
import actionTypes from './contacts-types';

const nanoid = customAlphabet('0123456789', 8);

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = filter => ({
  type: actionTypes.CHANGE_FILTER,
  payload: filter,
});

const todosActions = { addContact, deleteContact, changeFilter };

export default todosActions;
