import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Report } from 'notiflix';
import todosActions from 'redux/contacts/contacts-actions';
import { Input } from 'components/Input';
import s from './ContactForm.module.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    items.find(contact => contact.name === name)
      ? Report.warning(
          `Can't add this contact!`,
          `${name} is already in contacts.`,
          'OK',
        )
      : dispatch(todosActions.addContact({ name, number }));

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
      <button className={s.button} type='submit'>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
