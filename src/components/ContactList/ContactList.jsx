import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import {
  getVisibleContacts,
  getLoading,
} from 'redux/contacts/contacts-selectors';
import Contact from 'components/ContactList/Contact';
import Loading from 'components/Loading';
import { MdDelete } from 'react-icons/md';
import s from './ContactList.module.scss';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

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
                onClick={() => dispatch(deleteContact(id))}
              >
                <MdDelete size='30' />
              </button>
            </li>
          ))}
        </ul>
      )}

      {loading && <Loading />}
    </>
  );
}

export default ContactList;
