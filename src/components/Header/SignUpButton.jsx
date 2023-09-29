import React from 'react';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

export const SignUpButton = ({ type, setModalIsOpen }) => {
  return (
    <button
      className={`ml-6 w-[164px] p-[14px] bg-[#4F2EE8] border-[1.5px] rounded-[18px] ${
        type === 'burger' ? 'border-[#111]' : 'border-[#111] dark:border-[#fff]'
      }`}
      onClick={() => {
        setModalIsOpen(true);
      }}
    >
      <span className="flex justify-between items-center text-white">
        Sign Up
        <HiMiniArrowLongRight size={20} fill="#EAC645" />
      </span>
    </button>
  );
};
