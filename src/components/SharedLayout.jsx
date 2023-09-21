import React, { Suspense, useState } from 'react';
import { ThemeContext } from './contex/ThemeContext';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';

export const SharedLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Suspense
        fallback={
          <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black">
            <PuffLoader color="#36d7b7" loading={true} size={100} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </ThemeContext.Provider>
  );
};
