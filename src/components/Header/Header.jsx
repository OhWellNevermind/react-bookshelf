import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu2Fill } from 'react-icons/ri';

import Switcher from './Switcher';
import { BurgerMenu } from './BurgerMenu';
import { NavBar } from './NavBar';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-[#fff] dark:bg-[#111] dark:text-[#fff] flex w-[calc(100vw - 17px)] px-[24px] py-[24px] justify-between border-[1.5px] border-[#111111] dark:border-[#fff] rounded-b-[8px] relative">
        <div className="flex gap-[76px]">
          <NavLink to="/" className="flex justify-center items-center">
            Bookshelf
          </NavLink>
          <nav className="md:flex gap-6 hidden">
            <NavBar />
          </nav>
        </div>
        <div className="flex gap-[20px] justify-center items-center">
          <div className="w-fit h-fit">
            <Switcher />
          </div>
          {!open ? (
            <RiMenu2Fill
              onClick={() => {
                setOpen(!open);
              }}
              size={28}
              className="md:hidden"
            />
          ) : (
            <AiOutlineClose
              onClick={() => {
                setOpen(!open);
              }}
              size={28}
              className="md:hidden"
            />
          )}
        </div>
      </header>
      <BurgerMenu isOpen={open} setOpen={setOpen} />
    </>
  );
};
