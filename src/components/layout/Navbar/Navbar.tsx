import React, { useCallback, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import UserMenu from "./UserMenu";

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(true);
  const userIconRef = useRef<HTMLDivElement>(null);

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(e.target.value);
    },
    []
  );

  const handleOpenUserMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setOpenUserMenu((prev) => !prev);
  }, []);
  return (
    <div className="bg-neutral-50 h-[50px] border border-b-2 flex items-center justify-between px-[30px]">
      <p className="font-bold ">LOGO</p>
      <div className="flex items-center">
        <div className="relative">
          <BiSearch className="absolute left-2 top-[9px] text-[18px]" />
          <input
            className="p-1 border-2 rounded-md pl-[28px] text-[14px]"
            value={searchValue}
            onChange={handleSearchValue}
            placeholder="Search"
          />
        </div>
        <div className="relative ml-[10px] cursor-pointer">
          <div>
            <IoMdNotifications className="text-[24px] " />
            <span className="absolute p-[5] bg-red-600 top-[-8px] right-[-10px] h-[20px] w-[20px] rounded-2xl flex items-center justify-center text-white">
              4
            </span>
          </div>
        </div>
        <span
          ref={userIconRef}
          className=" relative rounded-[50%] bg-orange-500 ml-[20px] h-[25px] w-[25px] flex items-center justify-center cursor-pointer"
          onClick={handleOpenUserMenu}
        >
          K
          {openUserMenu && (
            <UserMenu setOpenUserMenu={setOpenUserMenu} ref={userIconRef} />
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
