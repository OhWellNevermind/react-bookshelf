import React from 'react';

export const SignUpModalInput = ({ name, placeholder, icon }) => {
  return (
    <input
      className="placeholder-[#111] dark:placeholder-white border-[2px] border-[#111] dark:border-[#fff] rounded-[40px] 
                           py-5 pl-10 bg-transparent text-[#111] dark:text-white focus:outline-none w-full"
      placeholder={placeholder}
      name={name}
      type="text"
    />
  );
};
