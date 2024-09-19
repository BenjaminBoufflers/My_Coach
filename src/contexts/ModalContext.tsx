"use client"

import { createContext, FC, ReactElement, ReactNode, useState } from "react";

type OptionsType = {
  clickPosition: {
    x: number;
    y: number;
  };
  size: number;
  modalContent: ReactElement;
};

type ModalContextType = {
  modalOpened: boolean;
  options: OptionsType;
  openModal: ({}: OptionsType) => void;
  closeModal: () => void;
};

const defaultContextValues: ModalContextType = {
  modalOpened: false,
  options: {
    size: 0,
    clickPosition: { x: 0, y: 0 },
    modalContent: <></>,
  },
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext(defaultContextValues);

type ModalProviderPropsType = {
  children: ReactNode;
};

export const ModalContextProvider: FC<ModalProviderPropsType> = ({children}) => {
  const [modalOpened, setModalOpened] = useState(defaultContextValues.modalOpened);
  const [options, setOptions] = useState<OptionsType>(defaultContextValues.options);

  const openModal = (newOptions: OptionsType) => {
    setOptions(newOptions);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalOpened,
        options,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
