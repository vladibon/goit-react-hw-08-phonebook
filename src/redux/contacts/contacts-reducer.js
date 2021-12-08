import { createReducer, combineReducers } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const { addContact, deleteContact, changeFilter } = contactsActions;

const items = createReducer([], builder =>
  builder
    .addCase(addContact, (state, { payload }) => [payload, ...state])
    .addCase(deleteContact, (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
    ),
);

const filter = createReducer('', builder =>
  builder.addCase(changeFilter, (_, { payload }) => payload),
);

export default combineReducers({ items, filter });
