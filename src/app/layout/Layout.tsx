import React from 'react';
import { Navbar } from '../../components/ui/Navbar';
import { Footer } from '../../components/ui/Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
