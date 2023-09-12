import React, { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';

export const BookModal = props => {
  const { onClose, bookInfo, open } = props;
  const [isAdded, setIsAdded] = useState(false);

  const { _id, author, book_image, description, buy_links, title } = bookInfo;

  useEffect(() => {
    setIsAdded(false);
    const books = localStorage.getItem('books');

    if (!books) {
      localStorage.setItem('books', JSON.stringify([]));
      return;
    }

    JSON.parse(books).forEach(book => {
      if (book._id === _id) {
        setIsAdded(true);
      }
    });
  }, [_id]);

  const addToShoppingList = evt => {
    const book = JSON.parse(evt.currentTarget.value);
    const savedBooks = localStorage.getItem('books');

    setIsAdded(true);
    if (savedBooks !== null) {
      const newBooks = [...JSON.parse(savedBooks), book];
      localStorage.setItem('books', JSON.stringify(newBooks));
      return;
    }
    localStorage.setItem('books', JSON.stringify(book));
  };

  const removeFromShoppingList = evt => {
    const book = JSON.parse(evt.currentTarget.value);
    const savedBooks = [...JSON.parse(localStorage.getItem('books'))];

    localStorage.setItem(
      'books',
      JSON.stringify(savedBooks.filter(savedBook => savedBook._id !== book._id))
    );

    setIsAdded(false);
  };

  return (
    <>
      {Object.keys(bookInfo).length ? (
        <Dialog
          sx={{
            '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
              borderColor: '#111',
              borderRadius: '18px',
              borderWidth: '2px',
            },
          }}
          onClose={onClose}
          open={open}
        >
          <div className="py-10 px-6 flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="w-[287px] h-[408px] self-center md:w-[192px] md:h-[281px]">
                <img
                  className="rounded-lg h-full w-full block"
                  src={book_image}
                  alt={title}
                />
              </div>
              <div className="flex flex-col w-[287px]">
                <h3 className="text-[#111] text-[16px] md:text-[24px] font-bold tracking-[-0.64px] md:tracking-[-0.96px] leading-[1.12] md:leading-[1.16] w-fit mb-2">
                  {title}
                </h3>
                <p className="text-[#B4AFAF] text-[12px] italic leading-[1.16] md:leading-[1.28] tracking-[-0.48px] md:tracking-[-0.56px] mb-5 w-fit">
                  {author}
                </p>
                <p className="w-[287px] md:w-[279px] max-h-[70px] overflow-y-auto text-[#111] text-[14px] leading-[1.28] tracking-[-0.56px] mb-5">
                  {description
                    ? description
                    : 'Sorry, currently there is no description for that book.'}
                </p>
                <ul className="flex w-fit">
                  <li>
                    <a href={buy_links[0].url}>{buy_links[0].name}</a>
                  </li>
                  <li>
                    <a href={buy_links[1].url}>{buy_links[1].name}</a>
                  </li>
                  <li>
                    <a href={buy_links[2].url}>{buy_links[2].name}</a>
                  </li>
                </ul>
              </div>
            </div>
            {!isAdded ? (
              <button
                className="border-2 py-[14px] px-7 w-fit md:w-[500px] border-[#4F2EE8] rounded-[40px] uppercase 
                text-[#111] hover:text-[#fff] hover:bg-[#4F2EE8] ease-in duration-200 flex justify-center items-center"
                value={JSON.stringify(bookInfo)}
                onClick={addToShoppingList}
              >
                <span className="block text-[#111] text-[14px] font-bold leading-[1.28] tracking-[-0.14px] w-fit whitespace-nowrap uppercase">
                  Add to shopping lists
                </span>
              </button>
            ) : (
              <>
                <button
                  className="border-2 py-[14px] px-7 w-fit md:w-[500px] border-[#4F2EE8] rounded-[40px] uppercase 
                text-[#111] hover:text-[#fff] hover:bg-[#4F2EE8] ease-in duration-200 mb-2 flex justify-center items-center"
                  value={JSON.stringify(bookInfo)}
                  onClick={removeFromShoppingList}
                >
                  <span className="block text-[#111] text-[14px] md:text-[18px] font-bold leading-[1.28] md:leading-[1.33] tracking-[-0.14px] md:tracking-[-0.18px] w-fit whitespace-nowrap uppercase">
                    Remove from shopping lists
                  </span>
                </button>
                <p className="text-[#11111180] text-center text-[12px] tracking-[-0.48px] leading-[1.16] w-[242px] md:w-[324px]">
                  Сongratulations! You have added the book to the shopping list.
                  To delete, press the button “Remove from the shopping list”.
                </p>
              </>
            )}
          </div>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};
