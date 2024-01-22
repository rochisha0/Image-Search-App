// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
        },
      });

      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
