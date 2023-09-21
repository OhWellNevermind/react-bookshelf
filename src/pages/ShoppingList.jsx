import { SupportUkraine } from 'components/SupportUkraine/SupportUkraine';
import { ShoppingBookList } from 'components/ShoppingList/ShoppingBookList';

import { useEffect } from 'react';
import { useState } from 'react';
import { EmptyBookListMessage } from 'components/ShoppingList/EmptyBookListMessage';

export const ShoppingList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem('books')));
  }, []);

  const removeFromShoppingList = evt => {
    const bookId = evt.currentTarget.value;
    const savedBooks = [...JSON.parse(localStorage.getItem('books'))];

    localStorage.setItem(
      'books',
      JSON.stringify(savedBooks.filter(savedBook => savedBook._id !== bookId))
    );
    setBooks(savedBooks.filter(savedBook => savedBook._id !== bookId));
  };

  return (
    <main className="dark:bg-[#202024] px-5 pt-10 flex pb-10 h-[100vh]">
      <SupportUkraine page="shopping-list" className="hidden ml-10" />
      <div className="flex flex-col w-full">
        <h2 className="text-[#111] dark:text-[#fff] text-[32px] font-bold leading-[1.18] tracking-[-1.28]">
          Shopping <span className="text-[#4F2EE8]">List</span>
        </h2>
        {books.length ? (
          <ShoppingBookList
            books={books}
            removeFromShoppingList={removeFromShoppingList}
          />
        ) : (
          <EmptyBookListMessage />
        )}
      </div>
    </main>
  );
};
