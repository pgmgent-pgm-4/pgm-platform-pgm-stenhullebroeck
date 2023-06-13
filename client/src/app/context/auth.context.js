// Import external modules
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import custom modules
import settings from '../config/settings';
import * as AppRoutes from '../routes';

const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem(settings.AUTH_KEY_LOCALSTORAGE))
  );

  useEffect(() => {
    localStorage.setItem(
      settings.AUTH_KEY_LOCALSTORAGE,
      JSON.stringify(currentUser)
    );
  }, [currentUser]);

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      const user = await response.json();
      if (user.error) {
        throw user.error;
      } else {
        setCurrentUser(user);
      }
      // Navigate to user dashboard page
      navigate(AppRoutes.HOME);
    } catch (error) {
      window.alert('Invalid username or password');
    }
  };

  const signUpWithEmailAndPassword = async (username, password, email) => {
    try {
      const response = await fetch('/api/signup', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
      });
      const user = await response.json();
      if (user) {
        setCurrentUser(user);
      }
      // Navigate to user dashboard page
      navigate(AppRoutes.USER);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      setCurrentUser(null);
      const response = await fetch('/api/logout', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser),
      });
      const userLoggedOut = await response.json();
      console.log('userLoggedOut');
      // Navigate to sign in page
      navigate(AppRoutes.AUTH_SIGN_IN);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signInWithEmailAndPassword,
        signUpWithEmailAndPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
