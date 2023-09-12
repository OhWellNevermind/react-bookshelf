import { Header } from './Header/Header';
import { AllCategories } from './AllCategories/AllCategories';
import { fetchBookByCategory } from 'api';
import { BookList } from './BookList/BookList';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { SupportUkraine } from './SupportUkraine/SupportUkraine';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('All categories');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(1);

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
    <>
      <Header />
      <main className="flex flex-col lg:flex-row lg:items-start items-center gap-[20px] md:gap-[98px] lg:gap-5 px-5 pt-10">
        <div className="flex flex-col md:flex-row lg:flex-col items-center gap-[40px] lg:gap-[86px]">
          <AllCategories
            setCategory={setCategory}
            activeIndex={activeCategoryIndex}
            setActiveIndex={setActiveCategoryIndex}
          />
          <SupportUkraine />
        </div>
        <div className="flex flex-col items-center">
          <BookList
            setCategory={setCategory}
            currentCategory={category}
            books={books}
            activeIndex={activeCategoryIndex}
            setActiveIndex={setActiveCategoryIndex}
          />
        </div>
      </main>
      <Toaster position="top-right" />
    </>
  );
};
