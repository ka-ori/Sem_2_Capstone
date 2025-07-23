"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    // This function runs when the app first loads.
    // It synchronizes the app's state with the cookies.
    const token = Cookies.get('token');
    const userCookie = Cookies.get('user');

    if (token) {
      // If a token exists, we expect a user cookie.
      if (userCookie) {
        try {
          // If both exist, the user is logged in.
          setUser(JSON.parse(userCookie));
        } catch (error) {
          // If user cookie is corrupted, treat as logged out.
          console.error("Corrupted user cookie, logging out.");
          logout(); 
        }
      } else {
        // If token exists but user cookie is missing, it's a broken session.
        console.error("Token exists but user cookie is missing, logging out.");
        logout();
      }
    }
    // If no token, we ensure the user state is null.
    // No 'else' block is needed because the default state is already null.

    setLoading(false);
  }, []);
  // --- END OF NEW LOGIC ---

  const login = (userData, token) => {
    // Set cookies with a path to ensure they are accessible site-wide.
    Cookies.set('token', token, { path: '/', expires: 1/24, secure: process.env.NODE_ENV === 'production' });
    Cookies.set('user', JSON.stringify(userData), { path: '/', expires: 1/24, secure: process.env.NODE_ENV === 'production' });
    setUser(userData);
    router.push('/dashboard');
  };

  const logout = () => {
    // When logging out, explicitly remove both cookies from the root path.
    Cookies.remove('token', { path: '/' });
    Cookies.remove('user', { path: '/' });
    setUser(null);
    router.push('/login');
  };

  const authContextValue = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  };

  // While loading, we can render nothing to prevent flashing content
  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};