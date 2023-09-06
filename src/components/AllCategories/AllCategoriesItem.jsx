import clsx from 'clsx';
import { useEffect, useState } from 'react';
// import React, { useState } from 'react';

export const AllCategoriesItem = ({ category, getBooksByCategory }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (category.list_name === 'All categories') {
      setActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li
      onClick={async evt => {
        evt.currentTarget.parentNode.childNodes.forEach(li => {
          li.classList.remove('text-[#4F2EE8]');
          li.classList.remove('uppercase');
        });
        setActive(true);
        getBooksByCategory(evt.currentTarget.textContent);
      }}
      className={clsx(
        ' hover:text-[#4F2EE8] cursor-pointer transition hover:uppercase text-[16px] leading-[1.33] tracking-[-0.36px]',
        {
          'text-[#4F2EE8] uppercase': active,
        }
      )}
    >
      {category.list_name}
    </li>
  );
};
