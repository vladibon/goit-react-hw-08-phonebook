import { useSelector } from 'react-redux';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

function App() {
  const contacts = useSelector(({ contacts }) => contacts.items);

  return (
    <main>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter labelName='Find contacts by name' />

        {contacts.length > 0 && <ContactList />}
      </Container>
    </main>
  );
}

export default App;
