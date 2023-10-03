import { fetchBookByCategory } from 'js/api';
import { AllCategories } from 'components/AllCategories/AllCategories';
import { BookList } from 'components/BookList/BookList';
import { SupportUkraine } from 'components/SupportUkraine/SupportUkraine';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Main = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('All categories');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(1);
  const bookListRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    setBooks([]);

    async function fetchData() {
      try {
        setBooks(await fetchBookByCategory(category, controller));
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          return;
        }
        toast.error(
          'Opps! Something wrong happened. Please try reloading the page.'
        );
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <main className="flex flex-col lg:flex-row lg:items-start items-center gap-[20px] md:gap-[98px] lg:gap-5 px-5 pt-10 dark:bg-[#202024]">
      <div className="flex flex-col md:flex-row lg:flex-col items-center gap-[40px] lg:gap-[86px]">
        <AllCategories
          setCategory={setCategory}
          activeIndex={activeCategoryIndex}
          setActiveIndex={setActiveCategoryIndex}
          bookListRef={bookListRef}
        />
        <SupportUkraine />
      </div>
      <div className="flex flex-col items-center">
        <BookList
          bookListRef={bookListRef}
          setCategory={setCategory}
          currentCategory={category}
          books={books}
          activeIndex={activeCategoryIndex}
          setActiveIndex={setActiveCategoryIndex}
        />
      </div>
    </main>
  );
};

export default Main;
