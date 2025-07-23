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
    
    
    const token = Cookies.get('token');
    const userCookie = Cookies.get('user');

    if (token) {
      
      if (userCookie) {
        try {
          
          setUser(JSON.parse(userCookie));
        } catch (error) {
          
          console.error("Corrupted user cookie, logging out.");
          logout(); 
        }
      } else {
        
        console.error("Token exists but user cookie is missing, logging out.");
        logout();
      }
    }
    
    

    setLoading(false);
  }, []);
  

  const login = (userData, token) => {
    
    Cookies.set('token', token, { path: '/', expires: 1/24, secure: process.env.NODE_ENV === 'production' });
    Cookies.set('user', JSON.stringify(userData), { path: '/', expires: 1/24, secure: process.env.NODE_ENV === 'production' });
    setUser(userData);
    router.push('/dashboard');
  };

  const logout = () => {
    
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
