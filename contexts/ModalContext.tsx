"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (isOpen: boolean) => void;
  isContactModalOpen: boolean;
  setIsContactModalOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isSearchModalOpen, setIsSearchModalOpen, isContactModalOpen, setIsContactModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
