import { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';
import { Container } from 'components/Container';
import { ContactForm } from 'components/ContactForm';
import { Input } from 'components/Input/Input';
import { ContactList } from 'components/ContactList';
import { useLocalStorage } from 'hooks/useLocalStorage';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleSubmit = useCallback(
    ({ name, number }) => {
      contacts.find(contact => contact.name === name)
        ? Report.warning(
            `Can't add this contact!`,
            `${name} is already in contacts.`,
            'OK',
          )
        : setContacts(contacts => [
            { id: nanoid(8), name, number },
            ...contacts,
          ]);
    },
    [contacts, setContacts],
  );

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Input
        type='text'
        name='filter'
        labelName='Find contacts by name'
        value={filter}
        onChange={setFilter}
      />

      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      )}
    </Container>
  );
}

export default App;
