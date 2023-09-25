import React, { useContext } from 'react';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { IoBookSharp } from 'react-icons/io5';
import { GiBookshelf } from 'react-icons/gi';
import { TbTrash } from 'react-icons/tb';
import { ThemeContext } from 'components/contex/ThemeContext';

export const ShoppingListItem = ({ book, removeFromShoppingList }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      key={book._id}
      className="w-full lg:w-[996px] border-[#4f2ee866] border-[2px] rounded-[16px] bg-[#fff] dark:bg-[#111] flex gap-[14px] md:gap-[24px]
                  py-[14px] md:py-[24px] px-[14px] md:px-[24px] relative"
    >
      <div className="min-w-[100px] md:min-w-[116px] h-[142px] md:h-[165px]">
        <img
          className="w-full h-full"
          src={book.book_image}
          alt={book.title + ' ' + book.author}
        />
      </div>

      <div className="flex flex-col justify-between w-full">
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
          <p className="max-w-[193px] md:w-[508px] lg:w-[808px] h-[68px] md:h-[53px] overflow-y-auto text-[#111] dark:text-[#fff] leading-[1.28] tracking-[-0.56px]">
            {book.description ||
              'Sorry, currently there is no description for that book.'}
          </p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-[#B4AFAF] italic text-[12px] leading-[1.16] tracking-[-0.48px]">
            {book.author}
          </p>
          <ul className="flex w-fit gap-[8px] md:gap-[16px] lg:gap-[20px]">
            <li>
              <a
                href={book.buy_links[0].url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillAmazonCircle
                  className="w-[16px] md:w-[28px] lg:w-[32px] h-[16px] md:h-[28px] lg:h-[32px]"
                  fill={`${theme === 'dark' ? '#fff' : '#111'}`}
                />
              </a>
            </li>
            <li>
              <a
                href={book.buy_links[1].url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoBookSharp
                  className="w-[16px] md:w-[28px] lg:w-[32px] h-[16px] md:h-[28px] lg:h-[32px]"
                  fill={`${theme === 'dark' ? '#fff' : '#111'}`}
                />
              </a>
            </li>
            <li>
              <a
                href={book.buy_links[2].url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GiBookshelf
                  className="w-[16px] md:w-[28px] lg:w-[32px] h-[16px] md:h-[28px] lg:h-[32px]"
                  fill={`${theme === 'dark' ? '#fff' : '#111'}`}
                />
              </a>
            </li>
          </ul>
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
};
