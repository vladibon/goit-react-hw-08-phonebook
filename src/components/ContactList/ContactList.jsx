import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import Contact from 'components/ContactList/Contact';
import { MdDelete } from 'react-icons/md';
import s from './ContactList.module.scss';

function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
              <Contact name={name} number={number} />

              <button
                className={s.button}
                type='button'
                aria-label='Delete contact'
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                <MdDelete size='30' />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ContactList;
