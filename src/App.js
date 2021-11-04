import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { Container } from './components/Container';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;

    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        { id: uuid(), name: name.value, number: number.value },
      ],
    }));
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);

    return (
      <Container>
        <h1>Phonebook</h1>

        <form className={s.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type='text'
              name='name'
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleNameChange}
            />
          </label>

          <label>
            Number
            <input
              type='tel'
              name='number'
              pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
              title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
              required
              onChange={this.handleNumberChange}
            />
          </label>
          <button type='submit'>Add contact</button>
        </form>

        <h2>Contacts</h2>

        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>

        {/* <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div> */}
      </Container>
    );
  }
}

export default App;
