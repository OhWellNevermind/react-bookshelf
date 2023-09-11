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
      <main className="flex gap-[20px] px-6 py-6">
        <div className="flex flex-col gap-[86px]">
          <AllCategories
            setCategory={setCategory}
            activeIndex={activeCategoryIndex}
            setActiveIndex={setActiveCategoryIndex}
          />
          <SupportUkraine />
        </div>
        <div>
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
