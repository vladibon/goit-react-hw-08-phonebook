import { connect } from 'react-redux';
import { Report } from 'notiflix';
import { addContact, deleteContact, changeFilter } from 'redux/actions';
import { Container } from 'components/Container';
import { ContactForm } from 'components/ContactForm';
import { Input } from 'components/Input/Input';
import { ContactList } from 'components/ContactList';
// import { useLocalStorage } from 'hooks/useLocalStorage';

function App({
  contacts,
  filter,
  onAddContact,
  onDeleteContact,
  onChangeFilter,
}) {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  const handleSubmit = ({ name, number }) => {
    contacts.find(contact => contact.name === name)
      ? Report.warning(
          `Can't add this contact!`,
          `${name} is already in contacts.`,
          'OK',
        )
      : onAddContact({ name, number });
  };

  const filterContacts = () => {
    const normalizedFilter = filter?.toLowerCase().trim();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = filterContacts();

  return (
    <main>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmit} />

        <h2>Contacts</h2>
        <Input
          type='text'
          name='filter'
          labelName='Find contacts by name'
          value={filter}
          onChange={onChangeFilter}
        />

        {visibleContacts?.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            deleteContact={onDeleteContact}
          />
        )}
      </Container>
    </main>
  );
}

const mapStateToProps = ({ items, filter }) => ({
  contacts: items,
  filter: filter,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(addContact(contact)),
  onDeleteContact: contactId => dispatch(deleteContact(contactId)),
  onChangeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
