import React from 'react';

function ChatMessage({ role, message }) {
  const messageStyle = role === 'model' ? 'bg-gray-200' : 'bg-blue-500';
  const fontStyle = role === 'model' ? 'text-gray-800' : 'text-white';

  return (
    <div className={`flex ${role === 'model' ? 'justify-start' : 'justify-end'} items-center mb-4`}>
      <div className={`px-4 py-2 rounded-lg shadow-md ${messageStyle}`}>
        <p className={fontStyle}>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
