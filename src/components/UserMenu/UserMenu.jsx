import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authThunk';
import { getUserName } from 'redux/auth/authSelector';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <>
      <p>{userName}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
