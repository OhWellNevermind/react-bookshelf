import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Menu as BaseMenu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import { BiSolidDownArrow, BiSolidUser } from 'react-icons/bi';
import { HiMiniArrowLongRight } from 'react-icons/hi2';
import { userSignOut } from 'js/authorization';

export default function DropDownMenu({ name, setUsername }) {
  return (
    <div className="ml-6 text-white text-[22px] font-bold tracking-[-0.44px]">
      <Dropdown>
        <MenuButton>
          <div className="mr-[9px] w-[37px] h-[37px] bg-[#F6F6F6] rounded-full flex items-center justify-center">
            <BiSolidUser fill="#4F2EE8" size={19} />
          </div>
          {name}
          <BiSolidDownArrow className="ml-[4px]" size={20} />
        </MenuButton>
        <Menu>
          <MenuItem setUsername={setUsername}>
            <span className="mr-[90px]">Log out</span>
            <HiMiniArrowLongRight size={20} fill="#EAC645" />
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
}

const resolveSlotProps = (fn, args) =>
  typeof fn === 'function' ? fn(args) : fn;

const Menu = React.forwardRef((props, ref) => {
  return (
    <BaseMenu
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: ownerState => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(` z-10`, resolvedSlotProps?.className),
          };
        },
        listbox: ownerState => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx('', resolvedSlotProps?.className),
          };
        },
      }}
    />
  );
});

Menu.propTypes = {
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

const MenuButton = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuButton
      ref={ref}
      className={clsx(
        'cursor-pointer bg-[#4F2EE8] rounded-[36px] h-[45px] px-3 py-[8px] flex items-center',
        className
      )}
      {...other}
    />
  );
});

MenuButton.propTypes = {
  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,
};

const MenuItem = React.forwardRef((props, ref) => {
  const { className, setUsername, ...other } = props;
  return (
    <BaseMenuItem
      onClick={() => {
        console.log(ref);
        userSignOut();
        setUsername('');
      }}
      ref={ref}
      className={clsx(
        'list-none bg-white border-[#111] border-[1.5px] rounded-[18px] flex p-[15px]',
        className
      )}
      {...other}
    />
  );
});

MenuItem.propTypes = {
  className: PropTypes.string,
};
