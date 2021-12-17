import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { changeFilter } from './contacts-actions';

const items = createReducer([], builder =>
  builder
    .addCase(fetchContacts.fulfilled, (_, { payload }) => payload)
    .addCase(addContact.fulfilled, (state, { payload }) => [...state, payload])
    .addCase(deleteContact.fulfilled, (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
    ),
);

const loading = createReducer(false, builder =>
  builder
    .addCase(fetchContacts.pending, () => true)
    .addCase(fetchContacts.fulfilled, () => false)
    .addCase(fetchContacts.rejected, () => false)
    .addCase(addContact.pending, () => true)
    .addCase(addContact.fulfilled, () => false)
    .addCase(addContact.rejected, () => false)
    .addCase(deleteContact.pending, () => true)
    .addCase(deleteContact.fulfilled, () => false)
    .addCase(deleteContact.rejected, () => false),
);

const error = createReducer(null, builder =>
  builder
    .addCase(fetchContacts.rejected, (_, { error }) => error)
    .addCase(fetchContacts.pending, () => null)
    .addCase(addContact.rejected, (_, { error }) => error)
    .addCase(addContact.pending, () => null)
    .addCase(deleteContact.rejected, (_, { error }) => error)
    .addCase(deleteContact.pending, () => null),
);

const filter = createReducer('', builder =>
  builder.addCase(changeFilter, (_, { payload }) => payload),
);

export default combineReducers({ items, filter, loading, error });
