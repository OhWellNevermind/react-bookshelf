import axios from 'axios';

export const fetchCategories = async () => {
  const response = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );

  return response.data;
};

export const fetchBookByCategory = async category => {
  let response;

  if (category === 'All categories') {
    response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
    return response.data;
  }

  response = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${category}`
  );
  return response.data;
};
