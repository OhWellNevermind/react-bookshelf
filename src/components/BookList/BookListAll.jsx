import React from 'react';
import { useMemo } from 'react';

export const BookListAll = ({
  setModalBookInfo,
  openModal,
  books = [],
  booksCount,
}) => {
  const visibleBooks = useMemo(() => {
    return books.filter((_, idx) => idx <= booksCount);
  }, [books, booksCount]);

  return (
    <ul className="flex gap-[24px] md:gap-[25px] mb-[32px]">
      {visibleBooks.map(book => {
        return (
          <li
            className="flex flex-col w-[335px] md:w-[218px] lg:w-[180px]"
            key={book._id}
          >
            <div>
              <img
                className="mb-[14px] h-[485px] md:h-[316px] lg:h-[256px] rounded-[8px] cursor-pointer min-w-full"
                src={book.book_image}
                alt=""
                onClick={() => {
                  openModal(true);
                  setModalBookInfo(book);
                }}
              />
              <p
                className="text-[#111] dark:text-[#fff] text-[16px] font-bold leading-[1.12] tracking-[-0.64px] mb-[4px] 
                                        overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {book.title}
              </p>
              <p
                className="text-[#B4AFAF] text-[12px] italic leading-[1.16] 
                                        overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {book.author}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
