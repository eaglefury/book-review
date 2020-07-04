import React from 'react';
import { useDispatch } from 'react-redux';
import addBook from './actions/book-action';
import { BookList } from './components/booklist/book-list';

const App = () => {
  {
    //const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    dispatch(
      addBook({
        title: 'This is a title',
        details: 'This is a description',
      })
    );
    dispatch(
      addBook({
        title: 'This is a second title',
        details: 'This is a second description',
      })
    );
  }
  return <BookList> </BookList>;
};

export default App;
