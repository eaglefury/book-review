import React from 'react';
import { Book } from '../book/book';
import './book-list.css';
export const BookList = (props) => {
  return (
    <div className='book-list'>
      {props.books.map((book, i) => {
        return <Book book={book}></Book>;
      })}
    </div>
  );
};
