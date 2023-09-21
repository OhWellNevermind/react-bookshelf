import { ShoppingListItem } from './ShoppingListItem';

export const ShoppingBookList = ({ books, removeFromShoppingList }) => {
  return (
    <ul className="flex flex-col gap-10 pt-10">
      {books.map(book => {
        return (
          <ShoppingListItem
            key={book._id}
            book={book}
            removeFromShoppingList={removeFromShoppingList}
          />
        );
      })}
    </ul>
  );
};
