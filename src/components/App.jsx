import { Header } from './Header/Header';
import { AllCategories } from './AllCategories/AllCategories';
import { fetchBookByCategory } from 'api';
import { BookList } from './BookList/BookList';
import { useEffect, useState } from 'react';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('All categories');

  useEffect(() => {
    async function fetchData() {
      setBooks(await fetchBookByCategory(category));
    }
    fetchData();
  }, [category]);

  return (
    <>
      <Header />
      <main className="flex gap-[20px] px-6 py-6">
        <AllCategories setCategory={setCategory} />
        <div>
          <BookList
            setCategory={setCategory}
            currentCategory={category}
            books={books}
          />
        </div>
      </main>
    </>
  );
};
