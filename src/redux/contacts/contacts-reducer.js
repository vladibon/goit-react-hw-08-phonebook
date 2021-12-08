import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contacts-actions';

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
