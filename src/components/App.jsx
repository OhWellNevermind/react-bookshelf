import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

const Main = lazy(() => import('../pages/Main'));
const ShoppingList = lazy(() => import('../pages/ShoppingList'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />

          <Route path="shopping-list" element={<ShoppingList />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </>
  );
};
