import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Registration</NavLink>

      <NavLink to="/login">Log In</NavLink>
    </>
  );
};

export default AuthNav;
