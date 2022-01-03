import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import s from './ContactsPage.module.scss';

function ContactsPage() {
  return (
    <main>
      <Container>
        <div className={s.wrapper}>
          <ContactForm />
          <div className={s.content}>
            <Filter labelName='Find contacts by name' />
            <ContactList />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ContactsPage;
