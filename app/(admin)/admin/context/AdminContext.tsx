"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AdminContext.Provider
      value={{
        activeSection,
        setActiveSection,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
