import React from 'react';
import './search-box.css';

export const SearchBox = (props) => {
  return (
    <div className='search-container'>
      <input className='search-box' type='text'></input>
      <input className='search-button' type='button' value='Search'></input>
    </div>
  );
};
