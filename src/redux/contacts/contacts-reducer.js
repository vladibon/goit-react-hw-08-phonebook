import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], builder =>
  builder
    .addCase(fetchContactsSuccess, (_, { payload }) => payload)
    .addCase(addContactSuccess, (state, { payload }) => [payload, ...state])
    .addCase(deleteContactSuccess, (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
    ),
);

const loading = createReducer(false, builder =>
  builder
    .addCase(fetchContactsRequest, () => true)
    .addCase(fetchContactsSuccess, () => false)
    .addCase(fetchContactsError, () => false)
    .addCase(addContactRequest, () => true)
    .addCase(addContactSuccess, () => false)
    .addCase(addContactError, () => false)
    .addCase(deleteContactRequest, () => true)
    .addCase(deleteContactSuccess, () => false)
    .addCase(deleteContactError, () => false),
);

const error = createReducer(null, builder =>
  builder
    .addCase(fetchContactsError, (_, { payload }) => payload)
    .addCase(fetchContactsRequest, () => null)
    .addCase(addContactError, (_, { payload }) => payload)
    .addCase(addContactRequest, () => null)
    .addCase(deleteContactError, (_, { payload }) => payload)
    .addCase(deleteContactRequest, () => null),
);

const filter = createReducer('', builder =>
  builder.addCase(changeFilter, (_, { payload }) => payload),
);

export default combineReducers({ items, filter, loading, error });
