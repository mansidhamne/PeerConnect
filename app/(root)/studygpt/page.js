'use client'

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ChatMessage from './ChatMessage';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    // Simulate initial greeting (replace with actual API call)
    setMessages([{ role: 'model', message: 'Hello! How can I help you today?' }]);
  }, []);

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage(messageInput);
    }
  };

  const sendMessage = async (message) => {
    try {
      const response = await fetch('http://localhost:3001/studygpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
  
      const data = await response.json();
      // Append the user's input message to the existing messages array
      setMessages(prevMessages => [...prevMessages, { role: 'user', message: messageInput }]);
      // Append the model's response to the existing messages array
      setMessages(prevMessages => [...prevMessages, { role: 'model', message: data.message }]);
      setMessageInput('');
    } catch (error) {
      console.error(error);
      setMessages([...messages, { role: 'model', message: 'Oops! Something went wrong. Try again later.' }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-800 w-full">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
            <ChatMessage key={index} role={message.role} message={message.message}>
              {message.role === 'user' ? (
                <div>{message.message}</div>
              ) : (
                <ReactMarkdown>{message.message}</ReactMarkdown>
              )}
            </ChatMessage>
        ))}
      </div>
      
      <div className="flex items-center p-4 bg-white shadow-md">
        <input
          type="text"
          id="message-input"
          className="flex-grow px-4 py-2 rounded-md focus:outline-none"
          placeholder="Type your message here"
          value={messageInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          id="send-button"
          className="ml-4 px-4 py-2 rounded-md bg-blue-700 text-white font-bold hover:bg-blue-800"
          onClick={() => sendMessage(messageInput)}
        >
          Send
        </button>
      </div>
    </div>
  );
}


export default ChatApp;

