import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Navigation /> {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default Layout;
