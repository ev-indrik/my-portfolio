import { createContext, useContext, useState } from 'react';
import type {ReactNode} from 'react'

type ContactModalContextType = {
    openModal: () => void;
    closeModal: () => void;
    isOpen: boolean;
};

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const useContactModal = () => {
    const context = useContext(ContactModalContext);
    if (!context) throw new Error('useContactModal must be used within ContactModalProvider');
    return context;
};

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ContactModalContext.Provider>
    );
};
