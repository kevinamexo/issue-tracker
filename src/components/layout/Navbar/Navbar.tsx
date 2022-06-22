import React, { useCallback, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import UserMenu from "./UserMenu";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { setModalActive } from "../../../redux/features/UI/modalsSlice";

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(true);
  const userIconRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { modalActive } = useAppSelector((state) => state.modals);

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(e.target.value);
    },
    []
  );

  const handleAddItem = useCallback(() => {
    dispatch(setModalActive(!modalActive));
  }, [modalActive]);

  const handleOpenUserMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setOpenUserMenu((prev) => !prev);
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 w-[100vw] h-[50px] border border-b-[1px] flex items-center justify-between px-[30px]">
      <p className="font-bold ">LOGO</p>
      <div className="flex items-center">
        <div
          className="bg-black text-white mr-[20px] px-2 py-1 rounded-md font-bold cursor-pointer"
          onClick={handleAddItem}
        >
          <FiPlus />
        </div>
        <div className="relative">
          <BiSearch className="absolute left-2 top-[9px] text-[18px]" />
          <input
            className="p-1 border-[1px] rounded-md pl-[28px] text-[14px]"
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
