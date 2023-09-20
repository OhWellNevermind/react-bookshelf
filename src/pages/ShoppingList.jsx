import { SupportUkraine } from 'components/SupportUkraine/SupportUkraine';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TbTrash } from 'react-icons/tb';

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
    <main className="dark:bg-[#202024] px-5 pt-10 flex h-[100vh] ">
      <SupportUkraine page="shopping-list" className="hidden ml-10" />
      <div className="flex flex-col w-full">
        <h2 className="mb-10 text-[#111] dark:text-[#fff] text-[32px] font-bold leading-[1.18] tracking-[-1.28]">
          Shopping <span className="text-[#4F2EE8]">List</span>
        </h2>
        <ul className="flex flex-col gap-10">
          {books.length ? (
            books.map(book => {
              return (
                <li
                  key={book._id}
                  className="w-full lg:w-[996px] border-[#4f2ee866] border-[2px] rounded-[16px] bg-[#fff] dark:bg-[#111] flex gap-[14px] md:gap-[24px]
                  py-[14px] md:py-[24px] px-[14px] md:px-[24px] relative"
                >
                  <div className="w-[100px] md:w-[116px] h-[142px] md:h-[165px]">
                    <img
                      className="w-full h-full"
                      src={book.book_image}
                      alt={book.title + ' ' + book.author}
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p
                        className="text-[#111] dark:text-[#fff] text-[16px] font-bold tracking-[-0.64px] leading-[1.12] uppercase mb-1 
                      overflow-hidden text-ellipsis whitespace-nowrap max-w-[153px] md:max-w-none"
                      >
                        {book.title}
                      </p>
                      <p
                        className="text-[#B4AFAF] text-[12px] leading-[1.16] tracking-[0.36px] 
                      overflow-hidden text-ellipsis whitespace-nowrap max-w-[153px] md:max-w-none mb-[8px] md:mb-[14px]"
                      >
                        {book.list_name}
                      </p>
                      <p className="w-[193px] md:w-[508px] lg:w-[808px] h-[68px] md:h-[53px] overflow-y-auto text-[#111] dark:text-[#fff] leading-[1.28] tracking-[-0.56px]">
                        {book.description ||
                          'Sorry, currently there is no description for that book.'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#B4AFAF] italic text-[12px] leading-[1.16] tracking-[-0.48px]">
                        {book.author}
                      </p>
                      <ul></ul>
                    </div>
                  </div>
                  <button
                    onClick={removeFromShoppingList}
                    className="absolute top-[14px] md:top-6 right-[14px] md:right-6 rounded-full w-8 h-8 bg-[#4F2EE8] flex justify-center items-center"
                    value={book._id}
                  >
                    <TbTrash size={'16px'} color="#fff" />
                  </button>
                </li>
              );
            })
          ) : (
            <p key={'empty'}>EMPTY MESSAGE</p>
          )}
        </ul>
      </div>
    </main>
  );
};
