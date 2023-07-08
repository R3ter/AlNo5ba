import React, { createContext, useState, ReactNode } from "react";

type PopupContextType = {
  isOpen: boolean;
  content: ReactNode | null;
  openPopup: (content: ReactNode) => void;
  closePopup: () => void;
};

export const PopupContext = createContext<PopupContextType>({
  isOpen: false,
  content: null,
  openPopup: () => {},
  closePopup: () => {},
});

type PopupProviderProps = {
  children: ReactNode;
};

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openPopup = (popupContent: ReactNode) => {
    setIsOpen(true);
    setContent(popupContent);
  };

  const closePopup = () => {
    setIsOpen(false);
    setContent(null);
  };

  const contextValue: PopupContextType = {
    isOpen,
    content,
    openPopup,
    closePopup,
  };

  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  );
};
