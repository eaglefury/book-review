import React from 'react';
import './App.css';
import { BookList } from './components/booklist/book-list';
import { SearchBox } from './components/search/search-box';

function App() {
  const bookObj = [
    {
      title: 'Vedic Astrology: An Integrated Approach',
      details: 'A great book about vedic astrology by PVR Narsimha Rao.',
      imageUrl:
        'https://m.media-amazon.com/images/I/51MvDAMZzuL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      title:
        'The Art and Science of Vedic Astrology: The Foundation Course (Volume 1) ',
      details:
        'As a Yogic science, Vedic Astrology has been practiced for more than 5000 years with one ultimate aim: to provide insight and guidance towards the fulfillment of the soul',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51CH7MIBokL._SX331_BO1,204,203,200_.jpg',
    },
  ];
  return (
    <div className='App'>
      <SearchBox></SearchBox>
      <BookList books={bookObj}></BookList>
    </div>
  );
}

export default App;
