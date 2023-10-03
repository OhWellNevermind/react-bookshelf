import { ShoppingListItem } from './ShoppingListItem';
import { useContext, useState } from 'react';
import usePagination from 'hooks/usePagination';
import { StyledPagination } from './Pagination.styled';
import { ThemeContext } from 'components/contex/ThemeContext';
import { PaginationItem } from '@mui/material';
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md';

export const ShoppingBookList = ({ books, removeFromShoppingList }) => {
  const { theme } = useContext(ThemeContext);
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(books.length / PER_PAGE);
  const _DATA = usePagination(books, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // const countVisiblePaginationBtns = () => {};

  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-10 pt-10">
        {_DATA.currentData().map(book => {
          return (
            <ShoppingListItem
              key={book._id}
              book={book}
              removeFromShoppingList={removeFromShoppingList}
            />
          );
        })}
      </ul>
      <StyledPagination
        count={count}
        size="large"
        boundaryCount={0}
        siblingCount={0}
        renderItem={item => (
          <PaginationItem
            slots={{
              last: MdOutlineKeyboardDoubleArrowRight,
              first: MdOutlineKeyboardDoubleArrowLeft,
            }}
            {...item}
          />
        )}
        showFirstButton
        showLastButton
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className="self-center"
        theme={theme}
      />
    </div>
  );
};
