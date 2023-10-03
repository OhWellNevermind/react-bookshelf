import React, { useContext, useEffect, useState } from 'react';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { IoBookSharp } from 'react-icons/io5';
import { GiBookshelf } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Dialog } from '@mui/material';
import { ThemeContext } from 'components/contex/ThemeContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'js/authorization';
import { addBook, deleteBook, getUsersBooks } from 'js/db';

export const BookModal = ({ onClose, bookInfo, open, setModalIsOpen }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [user] = useAuthState(auth);
  const { _id, author, book_image, description, buy_links, title } = bookInfo;

  useEffect(() => {
    setIsAdded(false);
    async function getBooks() {
      const savedBooks = await getUsersBooks(user?.uid);

      if (!savedBooks) {
        return;
      } else {
        Object.values(savedBooks).forEach(book => {
          if (book._id === _id) {
            setIsAdded(true);
          }
        });
      }
    }
    getBooks();
  }, [_id, user?.uid]);

  const addToShoppingList = evt => {
    const book = JSON.parse(evt.currentTarget.value);

    setIsAdded(true);
    addBook(user.uid, book);
  };

  const removeFromShoppingList = evt => {
    const book = JSON.parse(evt.currentTarget.value);

    deleteBook(user.uid, book._id);

    setIsAdded(false);
  };

  return (
    <>
      {Object.keys(bookInfo).length ? (
        <Dialog
          sx={{
            '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
              borderColor: `${theme !== 'dark' ? '#111' : '#fff'}`,
              borderRadius: '18px',
              borderWidth: '2px',
            },
          }}
          onClose={onClose}
          open={open}
        >
          <div className="dark:bg-[#202024] py-10 px-6 flex flex-col justify-center items-center relative">
            <AiOutlineClose
              onClick={() => {
                setModalIsOpen(false);
              }}
              size={24}
              className="fill-black dark:fill-white absolute top-3 md:top-6 right-3 md:right-6 cursor-pointer"
            />
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="w-[287px] h-[408px] self-center md:w-[192px] md:h-[281px]">
                <img
                  className="rounded-lg h-full w-full block"
                  src={book_image}
                  alt={title}
                />
              </div>
              <div className="flex flex-col w-[287px]">
                <h3 className="text-[#111] dark:text-[#fff] text-[16px] md:text-[24px] font-bold tracking-[-0.64px] md:tracking-[-0.96px] leading-[1.12] md:leading-[1.16] w-[262px] mb-2">
                  {title}
                </h3>
                <p className="text-[#B4AFAF] text-[12px] italic leading-[1.16] md:leading-[1.28] tracking-[-0.48px] md:tracking-[-0.56px] mb-5 w-fit">
                  {author}
                </p>
                <p className="w-[287px] md:w-[279px] max-h-[70px] overflow-y-auto text-[#111] dark:text-[#fff] text-[14px] leading-[1.28] tracking-[-0.56px] mb-5">
                  {description
                    ? description
                    : 'Sorry, currently there is no description for that book.'}
                </p>
                <ul className="flex justify-center w-fit gap-[8px] md:gap-[16px] lg:gap-[20px]">
                  <li>
                    <a
                      href={buy_links[0].url}
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
                      href={buy_links[1].url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IoBookSharp
                        className="w-[16px] md:w-[28px] lg:w-[32px] h-[16px] md:h-[28px] lg:h-[32px] self-end"
                        fill={`${theme === 'dark' ? '#fff' : '#111'}`}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={buy_links[2].url}
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
            {user ? (
              !isAdded ? (
                <button
                  className="border-2 py-[14px] px-7 w-fit md:w-[500px] border-[#4F2EE8] rounded-[40px] uppercase 
                 hover:text-[#fff] hover:bg-[#4F2EE8] ease-in duration-200 flex justify-center items-center"
                  value={JSON.stringify(bookInfo)}
                  onClick={addToShoppingList}
                >
                  <span className="block text-[#111] dark:text-[#fff] text-[14px] font-bold leading-[1.28] tracking-[-0.14px] w-fit whitespace-nowrap uppercase">
                    Add to shopping lists
                  </span>
                </button>
              ) : (
                <>
                  <button
                    className="border-2 py-[14px] px-7 w-fit md:w-[500px] border-[#4F2EE8] rounded-[40px] uppercase 
                 hover:text-[#fff] hover:bg-[#4F2EE8] ease-in duration-200 mb-2 flex justify-center items-center"
                    value={JSON.stringify(bookInfo)}
                    onClick={removeFromShoppingList}
                  >
                    <span className="block text-[#111] dark:text-[#fff] text-[14px] md:text-[18px] font-bold leading-[1.28] md:leading-[1.33] tracking-[-0.14px] md:tracking-[-0.18px] w-fit whitespace-nowrap uppercase">
                      Remove from shopping lists
                    </span>
                  </button>
                  <p className="text-[#11111180] dark:text-[#ffffff80]  text-center text-[12px] tracking-[-0.48px] leading-[1.16] w-[242px] md:w-[324px]">
                    Сongratulations! You have added the book to the shopping
                    list. To delete, press the button “Remove from the shopping
                    list”.
                  </p>
                </>
              )
            ) : (
              <p className="text-[#11111180] dark:text-[#ffffff80]  text-center text-[15px] tracking-[-0.48px] leading-[1.16] w-full">
                You need to sign up to be able to add books to shopping list!
              </p>
            )}
          </div>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};
