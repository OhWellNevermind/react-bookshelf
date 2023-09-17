import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Toaster } from 'react-hot-toast';
import { Main } from 'pages/Main';
import { ShoppingList } from 'pages/ShoppingList';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
      </Routes>

      <Toaster position="top-right" />
    </>
  );
};
