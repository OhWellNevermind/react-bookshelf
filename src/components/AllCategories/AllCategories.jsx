import React, { useEffect, useState } from 'react';
import { AllCategoriesItem } from './AllCategoriesItem';
import { fetchCategories } from 'js/api';
import { toast } from 'react-hot-toast';

export const AllCategories = ({
  setCategory,
  activeIndex,
  setActiveIndex,
  bookListRef,
}) => {
  const [categories, setCategories] = useState([]);

  // const setActiveCategory = id => {
  //   setIsActiveIndex(id);
  // };

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const categories = await fetchCategories(controller);
        categories.sort((a, b) => {
          const nameA = a.list_name.toUpperCase();
          const nameB = b.list_name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
        setCategories([{ list_name: 'All categories' }, ...categories]);
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
  }, []);

  return (
    <ul className="flex flex-col w-[307px] md:w-[309px] gap-[24px] h-[228px] md:h-[472px] overflow-y-scroll">
      {[...categories].map((category, index) => {
        return (
          <AllCategoriesItem
            bookListRef={bookListRef}
            setCategory={setCategory}
            setIsActiveIndex={setActiveIndex}
            category={category}
            key={index + 1}
            id={index + 1}
            active={index + 1 === activeIndex}
          />
        );
      })}
    </ul>
  );
};
