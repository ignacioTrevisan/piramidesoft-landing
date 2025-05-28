"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  // Nuevas funciones para acciones rápidas
  triggerCreateProduct: () => void;
  triggerCreateBlog: () => void;
  createProductTriggered: boolean;
  createBlogTriggered: boolean;
  resetTriggers: () => void;
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
  const [createProductTriggered, setCreateProductTriggered] = useState(false);
  const [createBlogTriggered, setCreateBlogTriggered] = useState(false);

  const triggerCreateProduct = () => {
    setActiveSection('productos');
    setCreateProductTriggered(true);
  };

  const triggerCreateBlog = () => {
    setActiveSection('blogs');
    setCreateBlogTriggered(true);
  };

  const resetTriggers = () => {
    setCreateProductTriggered(false);
    setCreateBlogTriggered(false);
  };

  return (
    <AdminContext.Provider
      value={{
        activeSection,
        setActiveSection,
        isLoading,
        setIsLoading,
        triggerCreateProduct,
        triggerCreateBlog,
        createProductTriggered,
        createBlogTriggered,
        resetTriggers,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
