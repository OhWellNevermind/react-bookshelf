import React, { useEffect } from 'react';
import { NavBar } from './NavBar';
import { SignUpButton } from './SignUpButton';
import { BiSolidUser } from 'react-icons/bi';
import { LogOutButton } from './LogOutButton';

export const BurgerMenu = ({
  username,
  isOpen,
  setOpen,
  setModalIsOpen,
  setUsername,
}) => {
  useEffect(() => {
    const root = window.document.documentElement;
    if (isOpen) {
      root.style.overflow = 'hidden';
    } else {
      root.style = '';
    }
  });

  return (
    <div className={`burgerMenu md:hidden ${!isOpen && 'hideBurger'}`}>
      <div className="flex flex-col justify-between h-[calc(100%-72px)]">
        {!username ? (
          <SignUpButton type="burger" setModalIsOpen={setModalIsOpen} />
        ) : (
          <div className="flex items-center text-white text-[22px] font-bold tracking-[-0.44px]">
            <div className=" mr-[9px] w-[37px] h-[37px] bg-[#F6F6F6] rounded-full flex items-center justify-center">
              <BiSolidUser fill="#4F2EE8" size={19} />
            </div>
            {username}
          </div>
        )}
        <nav className="flex flex-col justify-center items-center gap-[18px]">
          <NavBar setOpen={setOpen} setModalIsOpen={setModalIsOpen} />
        </nav>
        {username && <LogOutButton setUsername={setUsername} />}
      </div>
    </div>
  );
};
