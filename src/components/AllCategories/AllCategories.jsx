import React, { useEffect, useState } from 'react';
import { AllCategoriesItem } from './AllCategoriesItem';
import { fetchCategories } from 'api';
import { toast } from 'react-hot-toast';

export const AllCategories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);

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
    <ul className="flex flex-col w-[356px] gap-[32px] h-[452px] overflow-y-scroll min-w-[356px]">
      {[...categories].map((category, index) => {
        return (
          <AllCategoriesItem
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
