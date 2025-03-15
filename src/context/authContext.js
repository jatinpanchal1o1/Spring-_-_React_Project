import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // You might want to fetch the user from an API or local storage
  useEffect(() => {
    // Simulate fetching user from an API
    const fetchUser = async () => {
      // For demonstration, we set the user to a dummy object after 1 second
      setTimeout(() => {
        setUser({ name: 'John Doe' });
      }, 1000);
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
