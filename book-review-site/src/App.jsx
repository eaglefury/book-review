import React from 'react';
import './App.css';
import { BookList } from './components/booklist/book-list';

function App() {
  const bookObj = [
    {
      title: 'This is a test book title',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores dolorem beatae dolore libero ducimus esse possimus quas quo perferendis. Necessitatibus alias labore consequuntur sint laudantium id, veniam impedit provident?',
    },
    {
      title: 'This is a test book title',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores dolorem beatae dolore libero ducimus esse possimus quas quo perferendis. Necessitatibus alias labore consequuntur sint laudantium id, veniam impedit provident?',
    },
  ];
  return (
    <div className='App'>
      <BookList books={bookObj}></BookList>
    </div>
  );
}

export default App;
