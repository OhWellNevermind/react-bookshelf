import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Toaster } from 'react-hot-toast';
import { Main } from 'pages/Main';
import { ShoppingList } from 'pages/ShoppingList';
import { ThemeContext } from './contex/ThemeContext';
import { useState } from 'react';

export const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>

        <Toaster position="top-right" />
      </ThemeContext.Provider>
    </>
  );
};
