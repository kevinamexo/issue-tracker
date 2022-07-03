import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import AddItemModal from "./AddItemModal";

const Modals: React.FC = () => {
  const { modalActive } = useAppSelector((state) => state.modals);
  return (
    <div className="absolute overflow-hidden top-[-0px] left-0 right-0 h-[100vh] w-[100vw]max-w-[100vw]  bg-black/90 z-50  flex justify-center">
      {modalActive && <AddItemModal />}
    </div>
  );
};

export default Modals;
