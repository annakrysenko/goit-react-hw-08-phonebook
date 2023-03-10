import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authThunk';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import PublicRoute from './PublicRoute/PublicRoute';
import Registration from './Pages/Registration';
import LogIn from './Pages/LogIn';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Contacts from './Pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

// export const App = () => {
//   const contacts = useSelector(getContacts);

//   return (
//     <div className={styles.container}>
//       <Wrapper>
//         <ContactsForm title="Phonebook" contacts={contacts} />
//         <ContactsWrapper>
//           <Filter />
//           <ContactsList title="Contacts" />
//         </ContactsWrapper>
//       </Wrapper>
//     </div>
//   );
// };
