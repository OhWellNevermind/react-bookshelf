import { BookModal } from 'components/BookModal/BookModal';
import { BookListAll } from './BookListAll';
import { BookListCategory } from './BookListCategory';
import { useState } from 'react';

export const BookList = ({
  books,
  currentCategory,
  setCategory,
  activeIndex,
  setActiveIndex,
}) => {
  const [modalBookInfo, setModalBookInfo] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const highlightLastWord = category => {
    if (!category) {
      return;
    }
    const words = category.split(' ');
    const activeWord = words[words.length - 1];
    words.splice(words.length - 1, 1);
    return (
      <h2 className="text-[#111] text-[48px] font-bold leading-[52px] tracking-[-1.92px] mb-[40px]">
        {words.join(' ')} <span className="text-[#4F2EE8]">{activeWord}</span>
      </h2>
    );
  };

  return (
    <>
      {currentCategory === 'All categories' ? (
        <>{highlightLastWord('Best Sellers Book')}</>
      ) : (
        <>{highlightLastWord(books[0]?.list_name)}</>
      )}
      <ul className="flex flex-col flex-wrap w-[100%] ">
        <div className="flex flex-wrap gap-y-[40px] gap-x-[24px]">
          {books.map((category, index) => {
            return (
              <li className="flex flex-col" key={index}>
                {currentCategory === 'All categories' && (
                  <p className="mb-[10px] text-[#B4AFAF] uppercase leading-[1.71] font-normal text-[14px]">
                    {category.list_name}
                  </p>
                )}

                {category.books ? (
                  <BookListAll
                    setModalBookInfo={setModalBookInfo}
                    openModal={setModalIsOpen}
                    books={category.books}
                  />
                ) : (
                  <BookListCategory
                    setModalBookInfo={setModalBookInfo}
                    openModal={setModalIsOpen}
                    key={index}
                    book={category}
                  />
                )}

                {category.books && (
                  <button
                    onClick={evt => {
                      setCategory(evt.currentTarget.value);
                      setActiveIndex(index + 2);
                    }}
                    value={category.list_name}
                    className="w-fit px-[28px] py-[14px] border-[2px] border-[#4F2EE8] rounded-[40px] place-self-end 
                              hover:bg-[#4F2EE8] text-[#111] leading-[1.28] tracking-[-0.14] hover:text-[#fff] transition-all"
                  >
                    See more
                  </button>
                )}
              </li>
            );
          })}
        </div>
      </ul>
      <BookModal
        onClose={closeModal}
        open={modalIsOpen}
        bookInfo={modalBookInfo}
      />
    </>
  );
};
