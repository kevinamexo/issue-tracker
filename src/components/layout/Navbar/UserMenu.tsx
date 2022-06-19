import React, { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";

interface Props {
  setOpenUserMenu: (x: boolean) => void;
}
const UserMenu = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const userMenuRef = useRef<HTMLDivElement>(null);
  const clickOutsideHandler = () => {
    props.setOpenUserMenu(false);
  };
  useOnClickOutside(
    userMenuRef,
    ref as React.RefObject<HTMLElement>,
    clickOutsideHandler
  );
  return (
    <div
      ref={userMenuRef}
      className="z-40 absolute top-[34px] right-[-20px] w-[250px] bg-white border-[1px] shadow-2xl rounded-lg  pt-[15px] pb-[10px]"
    >
      <p className="text-[12px] font-semibold px-[20px]">KEVIN.AMEXO</p>
      <ul className="list-none text-neutral-700">
        <li className="flex items-center justify-between text-[14px]  hover:bg-neutral-100 px-[20px] py-[10px]">
          Profile
          <AiOutlineUser className="text-[18px]" />
        </li>
        <li className="flex items-center justify-between text-[14px] hover:bg-neutral-100 px-[20px] py-[10px]">
          Account settings
          <AiOutlineSetting className="text-[18px]" />
        </li>
        <li className="flex text-[14px] border-t-[1px] hover:bg-neutral-100 px-[20px] py-[10px]">
          Log out
        </li>
      </ul>
    </div>
  );
});

export default React.memo(UserMenu);
