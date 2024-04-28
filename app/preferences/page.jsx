// app/preferences/page.jsx
'use client';

import React, { useState } from 'react';

const PreferencesForm = () => {
  const [community, setCommunity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ community }),
      });

      if (response.ok) {
        console.log('Preference created successfully');
      } else {
        console.error('Failed to create preference');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="mb-6">
        <label htmlFor="community" className="block text-gray-700 font-bold mb-2">
          Community
        </label>
        <select
          id="community"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select a community</option>
          <option value="Web Development">Web Development</option>
          <option value="AIML">AIML</option>
          <option value="DSA">DSA</option>
          <option value="College">College</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PreferencesForm;