import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import s from './Filter.module.scss';

function Filter({ labelName }) {
  const { filter } = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();

  return (
    <label className={s.field}>
      <span className={s.label}>{labelName}</span>
      <input
        className={s.input}
        type='text'
        name='filter'
        value={filter}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  labelName: PropTypes.string.isRequired,
};

export default Filter;
