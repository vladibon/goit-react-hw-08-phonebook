import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './components/Container';
import { ContactForm } from './components/ContactForm';
import { Filter } from './components/Filter';
import { ContactList } from './components/ContactList';
// import s from './App.module.css';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [...CONTACTS],
    filter: '',
  };

  handleSubmit = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts.`)
      : this.saveContact(newContact);
  };

  saveContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(8), name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = e => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
