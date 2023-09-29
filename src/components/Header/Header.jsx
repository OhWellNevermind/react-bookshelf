import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu2Fill } from 'react-icons/ri';

import Switcher from './Switcher';
import { BurgerMenu } from './BurgerMenu';
import { NavBar } from './NavBar';
import { SignUpModal } from 'components/SignUpModal/SignUpModal';
import { auth } from 'authorization';
import { onAuthStateChanged } from 'firebase/auth';
import DropDownMenu from './DropDownMenu';
import { SignUpButton } from './SignUpButton';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    try {
      onAuthStateChanged(auth, user => {
        if (user) {
          setUsername(user.displayName);
        }
      });
    } catch (error) {}
  }, []);

  return (
    <>
      <header
        className="bg-[#fff] dark:bg-[#111] dark:text-[#fff] flex 
      w-[calc(100vw - 17px)] px-[24px] py-[19px] justify-between border-[1.5px] border-[#111111] dark:border-[#fff]
      rounded-b-[8px] relative h-[72px]"
      >
        <div className="flex gap-[40px] lg:gap-[76px]">
          <NavLink to="/" className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_4313_619)">
                <path d="M0 0L12.2571 12.1286L24 24V0H0Z" fill="#F6F6F6" />
                <path
                  d="M3.34277 3.17145L12.2999 12.0429L20.7428 20.6572H3.34277V3.17145Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M20.7994 20.7137L11.8423 11.8423L3.39941 3.22797H20.7994V20.7137Z"
                  fill="#4F2EE8"
                />
                <path
                  d="M6.94238 6.77142L11.6995 11.5286L17.1424 16.9714H6.94238V6.77142Z"
                  fill="#4F2EE8"
                />
                <path
                  d="M6.94238 6.77142L11.6995 11.5286L17.1424 16.9714V6.77142H6.94238Z"
                  fill="#F6F6F6"
                />
              </g>
              <defs>
                <clipPath id="clip0_4313_619">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="fill-black dark:fill-[#F3F3F3]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="14"
                viewBox="0 0 77 14"
              >
                <path d="M9.702 3.73301C9.702 1.663 8.172 0.493005 5.526 0.493005H0V13.363H5.832C8.496 13.363 10.206 12.085 10.206 9.60101C10.206 7.67501 9.054 6.68501 7.704 6.45101V6.41501C8.766 6.05501 9.702 5.31701 9.702 3.73301ZM2.142 5.821V2.31101H5.58C6.858 2.31101 7.56 2.941 7.56 4.07501C7.56 5.20901 6.984 5.821 5.454 5.821H2.142ZM2.142 7.42301H5.904C7.254 7.42301 8.064 8.16101 8.064 9.47501C8.064 10.681 7.506 11.545 5.67 11.545H2.142V7.42301Z" />
                <path d="M15.7018 13.633C12.8218 13.633 11.0758 11.635 11.0758 8.77301C11.0758 5.91101 12.8218 3.913 15.7018 3.913C18.5818 3.913 20.3278 5.91101 20.3278 8.77301C20.3278 11.635 18.5818 13.633 15.7018 13.633ZM15.7018 12.085C17.5018 12.085 18.4378 10.663 18.4378 8.77301C18.4378 6.86501 17.5018 5.46101 15.7018 5.46101C13.9018 5.46101 12.9658 6.86501 12.9658 8.77301C12.9658 10.663 13.9018 12.085 15.7018 12.085Z" />
                <path d="M25.774 13.633C22.894 13.633 21.148 11.635 21.148 8.77301C21.148 5.91101 22.894 3.913 25.774 3.913C28.654 3.913 30.4 5.91101 30.4 8.77301C30.4 11.635 28.654 13.633 25.774 13.633ZM25.774 12.085C27.574 12.085 28.51 10.663 28.51 8.77301C28.51 6.86501 27.574 5.46101 25.774 5.46101C23.974 5.46101 23.038 6.86501 23.038 8.77301C23.038 10.663 23.974 12.085 25.774 12.085Z" />
                <path d="M31.7063 0.493005V13.363H33.5963V10.033L34.8743 8.82701L37.7723 13.363H40.0403L36.1703 7.58501L39.6623 4.165H37.3403L33.5963 7.85501V0.493005H31.7063Z" />
                <path d="M44.5964 7.80101C43.2644 7.49501 42.2384 7.42301 42.2384 6.48701C42.2384 5.83901 42.8504 5.40701 43.9844 5.40701C45.4604 5.40701 45.8204 6.14501 45.9464 6.86501H47.7824C47.6564 5.26301 46.4684 3.913 43.9664 3.913C41.6624 3.913 40.3304 5.11901 40.3304 6.63101C40.3304 8.71901 42.3104 9.00701 43.7684 9.34901C45.1184 9.67301 46.2164 9.76301 46.2164 10.915C46.2164 11.491 45.6584 12.139 44.3444 12.139C42.4004 12.139 41.9684 11.293 41.8784 10.303H40.0424C40.1324 12.247 41.4104 13.633 44.3804 13.633C46.6124 13.633 48.1244 12.535 48.1244 10.771C48.1244 8.57501 46.2884 8.19701 44.5964 7.80101Z" />
                <path d="M54.3039 3.913C52.7559 3.913 51.8019 4.63301 51.3159 5.35301H51.2799V0.493005H49.3899V13.363H51.2799V7.76501C51.2799 6.39701 52.2699 5.51501 53.6559 5.51501C54.9699 5.51501 55.4919 6.30701 55.4919 7.54901V13.363H57.3999V7.00901C57.3999 4.90301 56.0499 3.913 54.3039 3.913Z" />
                <path d="M63.1962 12.085C61.5222 12.085 60.5322 10.807 60.5322 9.25901H67.5882C67.5882 5.98301 66.1302 3.913 63.1602 3.913C60.3882 3.913 58.6422 5.78501 58.6422 8.77301C58.6422 11.653 60.3882 13.633 63.2502 13.633C65.6082 13.633 66.9762 12.301 67.4442 10.555H65.5542C65.3922 11.113 64.7622 12.085 63.1962 12.085ZM63.1602 5.40701C64.6902 5.40701 65.6982 6.43301 65.6982 7.85501H60.5322C60.5322 6.43301 61.6302 5.40701 63.1602 5.40701Z" />
                <path d="M68.92 0.493005V13.363H70.828V0.493005H68.92Z" />
                <path d="M77.0013 2.04101V0.493005C76.6233 0.421005 76.2093 0.367004 75.7413 0.367004C74.2293 0.367004 73.4013 1.05101 73.4013 2.99501V4.165H72.0873V5.71301H73.4013V13.363H75.3093V5.71301H77.0013V4.165H75.3093V3.15701C75.3093 2.11301 75.7773 1.98701 77.0013 2.04101Z" />
              </svg>
            </div>
          </NavLink>
          <nav className="md:flex md:gap-5 lg:gap-6 hidden h-[34px] items-center">
            <NavBar />
          </nav>
        </div>
        <div className="flex gap-[20px] justify-center items-center">
          <div className="w-fit h-fit flex items-center">
            <Switcher />
            <div className="hidden md:block">
              {username ? (
                <DropDownMenu name={username} setUsername={setUsername} />
              ) : (
                <SignUpButton setModalIsOpen={setModalIsOpen} />
              )}
            </div>
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
      <BurgerMenu
        username={username}
        isOpen={open}
        setOpen={setOpen}
        setModalIsOpen={setModalIsOpen}
        setUsername={setUsername}
      />
      <SignUpModal
        setUsername={setUsername}
        onOpen={setModalIsOpen}
        onClose={closeModal}
        isOpen={modalIsOpen}
      />
    </>
  );
};
