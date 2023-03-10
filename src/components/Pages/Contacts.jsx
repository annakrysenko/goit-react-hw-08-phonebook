import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { Box } from '@chakra-ui/react';

const Contacts = () => {
  return (
    <Box
      display={{ md: 'flex' }}
      flexDirection="row"
      justifyContent="space-around"
      p="20px"
    >
      <ContactsForm title="Phone" />
      <Box display={{ md: 'flex' }} flexDirection="column">
        <Filter />
        <ContactsList title="Contacts" />
      </Box>
    </Box>
  );
};

export default Contacts;
