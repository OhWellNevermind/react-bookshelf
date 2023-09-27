import { useContext, useState } from 'react';
import { Dialog, Backdrop } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BiLockAlt } from 'react-icons/bi';
import { ThemeContext } from 'components/contex/ThemeContext';
import { SignUpModalInput } from './SignUpModalInput';

export const SignUpModal = ({ onOpen, onClose, isOpen }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { theme } = useContext(ThemeContext);

  return (
    <Dialog
      sx={{
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
          borderColor: `${theme === 'dark' ? '#fff' : '#111'}`,
          borderRadius: '18px',
          borderWidth: '2px',
          width: '100%',
          maxWidth: '579px',
        },
      }}
      onClose={onClose}
      open={isOpen}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: '#4F2EE8',
          },
        },
      }}
    >
      <div className="flex flex-col dark:bg-[#202024] px-10 pt-20">
        <AiOutlineClose
          className="absolute top-6 right-6 cursor-pointer fill-[#111] dark:fill-[#fff]"
          size={20}
          onClick={() => {
            onClose();
          }}
        />
        <form className="flex flex-col gap-7">
          {isSignUp && (
            <label>
              <SignUpModalInput placeholder="NAME" name="username" />
            </label>
          )}
          <label className="relative">
            <SignUpModalInput placeholder="EMAIL" name="email" />
            <MdOutlineMailOutline
              size={28}
              className="absolute top-[18px] right-[32px] fill-[#111] dark:fill-white"
            />
          </label>
          <label className="relative">
            <BiLockAlt
              size={28}
              className="absolute top-[18px] right-[32px] fill-[#111] dark:fill-white"
            />
            <SignUpModalInput placeholder="PASSWORD" name="password" />
          </label>

          {isSignUp ? (
            <button
              className="w-full py-5 bg-[#111] dark:bg-[#F6F6F6] rounded-[40px] text-white dark:text-[#202024]
                         uppercase font-bold text-[18px] leading-[1.33] tracking-[0.18px] mb-10"
              type="submit"
            >
              Sign Up
            </button>
          ) : (
            <button
              className="w-full py-5 bg-[#111] dark:bg-[#F6F6F6] rounded-[40px] text-white dark:text-[#202024]
                         uppercase font-bold text-[18px] leading-[1.33] tracking-[0.18px] mb-10"
              type="submit"
            >
              Sign In
            </button>
          )}
        </form>
        <div className="flex self-center gap-5 pb-10">
          <p
            onClick={() => {
              setIsSignUp(true);
            }}
            className={`font-bold text-[18px] leading-[1.33] tracking-[-0.18px] uppercase ${
              !isSignUp &&
              'cursor-pointer text-[#111]/[.5] dark:text-[#f6f6f6]/[0.5]'
            } ${
              isSignUp && 'text-[#4F2EE8] dark:text-[text-[#4F2EE8]] underline'
            }`}
          >
            Sign Up
          </p>
          <p
            onClick={() => {
              setIsSignUp(false);
            }}
            className={`font-bold text-[18px] leading-[1.33] tracking-[-0.18px] uppercase ${
              isSignUp &&
              'cursor-pointer text-[#111]/[.5] dark:text-[#f6f6f6]/[0.5]'
            } ${
              !isSignUp && 'text-[#4F2EE8] dark:text-[text-[#4F2EE8]] underline'
            }`}
          >
            Sign In
          </p>
        </div>
      </div>
    </Dialog>
  );
};
