import React from 'react';
import { useDispatch } from 'react-redux';
import addBook from './actions/book-action';

const App = () => {
  {
    //const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    dispatch(
      addBook({
        title: 'This is a title',
        description: 'This is a description',
      })
    );
  }
  return <div>Hello</div>;
};

export default App;
