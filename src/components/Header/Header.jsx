import { ThemeContext } from 'components/contex/ThemeContext';
import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from './Switcher';

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  return (
    <header className="bg-[#fff] dark:bg-[#111] dark:text-[#fff] flex w-[calc(100vw - 17px)] px-[24px] py-[24px] justify-between border-[1.5px] border-[#111111] dark:border-[#fff] rounded-b-[8px]">
      <div className="flex gap-[76px]">
        <NavLink to="/" className="flex justify-center items-center">
          Bookshelf
        </NavLink>
        <nav className="md:flex gap-6 none hidden">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'active-nav-link dark:text-[#111] uppercase'
                : 'px-4 py-2 uppercase'
            }
            end
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'active-nav-link dark:text-[#111] uppercase'
                : 'px-4 py-2 uppercase'
            }
            to="/shopping-list"
          >
            Shopping List
          </NavLink>
        </nav>
      </div>
      <div className="flex gap-[20px] justify-center items-center">
        <div className="w-fit h-fit">
          <Switcher />
        </div>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </header>
  );
};
