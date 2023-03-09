import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Wrapper from './Wrapper/Wrapper';
import styles from './App.module.css';
import ContactsWrapper from './ContactsWrapper/ContactsWrapper';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={styles.container}>
      <Wrapper>
        <ContactsForm title="Phonebook" contacts={contacts} />

        <ContactsWrapper>
          <Filter />
          <ContactsList title="Contacts" />
        </ContactsWrapper>
      </Wrapper>
    </div>
  );
};
