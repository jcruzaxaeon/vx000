
// SEARCH BAR
//
// ./client/src/components/SearchBar.jsx

import React, { useState } from 'react';
import '../styles/global.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for tierlists or items..."
      />
      <button className='btn' type="submit">Search</button>
    </form>
  );
};

export default SearchBar;