import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [payload, ...state];

    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: combineReducers({ items, filter }),
});
