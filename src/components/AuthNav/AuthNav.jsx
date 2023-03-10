import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { RiUserReceivedFill } from 'react-icons/ri';

const AuthNav = () => {
  return (
    <Box display={{ md: 'flex' }} gap="20px">
      <NavLink to="/register">
        <Text color="#805AD5">Registration</Text>
      </NavLink>

      <NavLink to="/login">
        <Icon as={RiUserReceivedFill} color="#805AD5" />
      </NavLink>
    </Box>
  );
};

export default AuthNav;
