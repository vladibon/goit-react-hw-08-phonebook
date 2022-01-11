import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Report } from 'notiflix';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contacts/contacts-api';
import Input from './Input';
import Button from './Button';
import s from './ContactForm.module.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  // const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading, isSuccess }] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();

    // contacts.find(contact => contact.name === name)
    //   ? Report.warning(`Can't add this contact!`, `${name} is already in contacts.`, 'OK')
    //   : dispatch(contactsOperations.addContact({ name, number }));

    addContact({ name, number });

    clearForm();
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        type='text'
        name='name'
        labelName='Name'
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={setName}
      />

      <Input
        type='tel'
        name='number'
        labelName='Number'
        value={number}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
        onChange={setNumber}
      />

      <Button type='submit'>Add contact</Button>
    </form>
  );
}

export default ContactForm;
