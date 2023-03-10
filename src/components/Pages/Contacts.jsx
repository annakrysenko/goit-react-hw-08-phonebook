import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Contacts = () => {
  return (
    <>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
