import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-[#fff] flex w-[calc(100vw - 17px)] px-[24px] py-[24px] justify-between border-[1.5px] border-[#111111] rounded-b-[8px]">
      <div className="flex gap-[76px]">
        <NavLink to="/" className="flex justify-center items-center">
          Bookshelf
        </NavLink>
        <nav className="md:flex gap-6 none hidden">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-nav-link' : 'px-4 py-2'
            }
            end
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-nav-link' : 'px-4 py-2'
            }
            to="/shopping-list"
          >
            Shopping List
          </NavLink>
        </nav>
      </div>
      <div className="flex gap-[20px]">
        <div className="theme-switcher">Toogle Theme</div>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </header>
  );
};
