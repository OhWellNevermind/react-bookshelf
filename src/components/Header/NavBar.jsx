import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

export const NavBar = () => {
  return (
    <>
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
        className={({ isActive }) => {
          const active = isActive
            ? 'active-nav-link dark:text-[#111]'
            : 'px-4 py-2';
          return (
            // eslint-disable-next-line no-useless-concat
            'uppercase flex justify-center items-center gap-1' + ' ' + active
          );
        }}
        to="/shopping-list"
      >
        Shopping List <AiOutlineShopping size={20} />
      </NavLink>
    </>
  );
};
