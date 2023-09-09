import React, { useEffect, useState } from 'react';
import { AllCategoriesItem } from './AllCategoriesItem';
import { fetchCategories } from 'api';

export const AllCategories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);

  // const setActiveCategory = id => {
  //   setIsActiveIndex(id);
  // };

  useEffect(() => {
    async function fetchData() {
      const categories = await fetchCategories();
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
    }
    fetchData();
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
