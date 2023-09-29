import { userSignOut } from 'authorization';
import React from 'react';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

export const LogOutButton = ({ setUsername }) => {
  return (
    <button
      onClick={() => {
        userSignOut();
      }}
      className="list-none w-fit bg-white border-[#111] border-[1.5px] rounded-[18px] flex p-[15px]"
    >
      <span className="mr-[90px]">Log out</span>
      <HiMiniArrowLongRight size={20} fill="#EAC645" />
    </button>
  );
};