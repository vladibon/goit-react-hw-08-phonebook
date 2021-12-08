import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { Contact } from 'components/Contact';
import { MdDelete } from 'react-icons/md';
import s from './ContactList.module.scss';

function ContactList() {
  const { items, filter } = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = filterContacts();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <Contact name={name} number={number} />

          <button
            className={s.button}
            type='button'
            aria-label='Delete contact'
            onClick={() => dispatch(deleteContact(id))}
          >
            <MdDelete size='30' />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
