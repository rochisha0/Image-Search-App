// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';
const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for images"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
