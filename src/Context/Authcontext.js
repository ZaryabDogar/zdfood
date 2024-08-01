import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Create the context
const AuthContext = createContext();


// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the auth token is present in localStorage
    const authToken = localStorage.getItem('authToken');
    setIsAuthenticated(!!authToken);
  }, []);

  // Function to handle login
  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('email');
    setIsAuthenticated(false);

    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
