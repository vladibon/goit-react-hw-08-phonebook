import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Report } from 'notiflix';
import { addContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Input from 'components/ContactForm/Input';
import s from './ContactForm.module.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    contacts.find(contact => contact.name === name)
      ? Report.warning(
          `Can't add this contact!`,
          `${name} is already in contacts.`,
          'OK',
        )
      : dispatch(addContact({ name, phone }));

    clearForm();
  };

  const clearForm = () => {
    setName('');
    setPhone('');
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
        name='phone'
        labelName='Phone'
        value={phone}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
        onChange={setPhone}
      />

      <button className={s.button} type='submit'>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
