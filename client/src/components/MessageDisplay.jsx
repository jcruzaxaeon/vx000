

// MessageDisplay.js
import React from 'react';
import { useMessage } from '../contexts/MessageContext.jsx';
import '../styles/MessageDisplay.css';

export function MessageDisplay() {
  const { messages } = useMessage();

  if (messages.length === 0) return null;

  return (
    <div className="message-container">
      {messages.map(message => (
        <div key={message.id} className={`message-display ${message.type}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
}