import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contacts/contacts-api';
import Contact from 'components/ContactList/Contact';
import { MdDelete } from 'react-icons/md';
import s from './ContactList.module.scss';

function ContactList() {
  // const contacts = useSelector(contactsSelectors.getVisibleContacts);
  // const dispatch = useDispatch();
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
              <Contact name={name} number={number} />

              <button
                className={s.button}
                type='button'
                aria-label='Delete contact'
                onClick={() => deleteContact(id)}
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
