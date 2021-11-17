import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';
import { MdDelete } from 'react-icons/md';
import s from './ContactList.module.scss';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <Contact name={name} number={number} />

          <button
            className={s.button}
            type='button'
            onClick={() => deleteContact(id)}
          >
            <MdDelete size='30' />
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export { ContactList };
