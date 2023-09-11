import clsx from 'clsx';
// import { useEffect, useState } from 'react';

export const AllCategoriesItem = ({
  category,
  setCategory,
  id,
  active,
  setIsActiveIndex,
}) => {
  // const [active, setActive] = useState(false);

  // useEffect(() => {
  //   if (category.list_name === 'All categories') {
  //     setActive(true);
  //   }
  //   return () => {
  //     setActive(false);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <li
      onClick={evt => {
        setIsActiveIndex(id);
        setCategory(evt.currentTarget.textContent);
      }}
      className={clsx(
        ' hover:text-[#4F2EE8] cursor-pointer transition-all text-[16px] leading-[1.33] tracking-[-0.36px]',
        {
          'text-[#4F2EE8] uppercase': active,
        }
      )}
    >
      {category.list_name}
    </li>
  );
};
