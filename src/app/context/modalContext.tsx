"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define o tipo do contexto
type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
};

// Cria o contexto com valor padrão `null`
const ModalContext = createContext<ModalContextType | null>(null);

// Define o tipo das props do provider
type ModalProviderProps = {
  children: ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, setIsModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
