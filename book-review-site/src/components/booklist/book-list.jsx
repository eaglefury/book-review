import React from 'react';
import { Book } from '../book/book';
import './book-list.css';
import { useSelector } from 'react-redux';
export const BookList = (props) => {
  const bookList = useSelector((state) => state.books);
  return (
    <div className='book-list'>
      {bookList.map((book, i) => {
        return <Book book={book}></Book>;
      })}
    </div>
  );
};
