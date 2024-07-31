

// MessageContext.js

import React, { createContext, useState, useContext, useCallback } from 'react';

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((text, type = 'info') => {
    setMessages(prevMessages => {
      const newMessage = { id: Date.now(), text, type };
      const updatedMessages = [newMessage, ...prevMessages.slice(0, 2)];
      
      // Set timeout to remove the oldest message
      setTimeout(() => {
        setMessages(currentMessages => 
          currentMessages.filter(msg => msg.id !== newMessage.id)
        );
      }, 5000);

      return updatedMessages;
    });
  }, []);

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}

