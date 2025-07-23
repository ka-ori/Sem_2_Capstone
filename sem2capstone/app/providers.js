"use client";

import { AuthProvider } from '@/context/AuthContext'; 
import NavBar from '@/components/NavBar'; 

export function Providers({ children }) {
  return (
    <AuthProvider>
      <NavBar />
      <main>{children}</main>
    </AuthProvider>
  );
}