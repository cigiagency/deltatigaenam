import { createContext, useContext, useState, ReactNode } from "react";

interface CSChatContextType {
	isOpen: boolean;
	openChat: () => void;
	closeChat: () => void;
	toggleChat: () => void;
}

const CSChatContext = createContext<CSChatContextType | undefined>(undefined);

export const CSChatProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openChat = () => setIsOpen(true);
	const closeChat = () => setIsOpen(false);
	const toggleChat = () => setIsOpen(!isOpen);

	return (
		<CSChatContext.Provider
			value={{ isOpen, openChat, closeChat, toggleChat }}
		>
			{children}
		</CSChatContext.Provider>
	);
};

export const useCSChat = () => {
	const context = useContext(CSChatContext);
	if (context === undefined) {
		throw new Error("useCSChat must be used within a CSChatProvider");
	}
	return context;
};
