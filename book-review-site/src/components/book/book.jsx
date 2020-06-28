import React, { useState } from 'react';
import './book.css';

export const Book = (props) => {
  const [book] = useState(props.book);
  return (
    <div className='book-container'>
      <div className='book-title'> {book.title} </div>
      <div className='book-details'> {book.details} </div>
    </div>
  );
};
