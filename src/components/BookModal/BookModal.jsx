import React from 'react';
import { Dialog } from '@mui/material';

export const BookModal = props => {
  const { onClose, bookInfo, open } = props;

  const { _id, author, book_image, description, buy_links, title } = bookInfo;
  return (
    <>
      {Object.keys(bookInfo).length && (
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
          <div className="p-10 flex flex-col justify-center items-center">
            <div className="flex gap-6 mb-10">
              <div className="min-w-[192px] h-[281px]">
                <img className="h-full w-full block" src={book_image} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#111] text-[24px] font-bold tracking-[-0.96px] leading-[1.16] w-[279px] mb-2">
                  {title}
                </h3>
                <p className="text-[#B4AFAF] italic leading-[1.28] tracking-[-0.56px] mb-5">
                  {author}
                </p>
                <p className="w-[279px] max-h-[70px] overflow-y-auto text-[#111] leading-[1.28] tracking-[-0.56] mb-5">
                  {description
                    ? description
                    : 'Sorry, currently there is no description for that book.'}
                </p>
                <ul className="flex">
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
            <button
              className="border-2 py-5 w-[500px] border-[#4F2EE8] rounded-[40px] uppercase text-[#111] hover:text-[#fff] hover:bg-[#4F2EE8] ease-in duration-200"
              value={_id}
            >
              Add to shopping list
            </button>
          </div>
        </Dialog>
      )}
    </>
  );
};
