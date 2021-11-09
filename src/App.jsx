import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';
import { Container } from './components/Container';
import { ContactForm } from './components/ContactForm';
import { Filter } from './components/Filter';
import { ContactList } from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));

    storedContacts && this.setState({ contacts: storedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const currentContacts = this.state.contacts;

    currentContacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
  }

  handleSubmit = newContact => {
    this.state.contacts.find(({ name }) => name === newContact.name)
      ? Report.warning(
          `Can't add this contact!`,
          `${newContact.name} is already in contacts.`,
          'OK',
        )
      : this.addContact(newContact);
  };

  addContact = ({ name, number }) => {
    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(8), name, number }, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
