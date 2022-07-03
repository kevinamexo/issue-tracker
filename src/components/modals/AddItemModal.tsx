import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { setModalActive } from "../../redux/features/UI/modalsSlice";
import { motion, Variants } from "framer-motion";

interface Props {
  newItem?: boolean;
}
const AddItemModal: React.FC<Props> = ({ newItem }) => {
  const addItemRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const modalVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const closeModal = () => {
    dispatch(setModalActive(false));
  };

  useOnClickOutside(addItemRef, closeModal, addItemRef);
  return (
    <motion.div
      variants={modalVariants}
      initial="initial"
      animate="final"
      className="w-[550px] bg-white mt-[100px] py-[10px] rounded-md h-[585px]"
      ref={addItemRef}
    >
      <div className="flex items-center py-3 px-[30px] ">
        <p className="text-[20px] font-semibold">Add Task </p>
      </div>
      <form className="mt-4 ">
        <div className="overflow-y-scroll h-[400px] px-[30px] ">
          <div className="">
            <label
              htmlFor="countries"
              className="block mb-[1px] text-[12px] font-medium text-gray-900 dark:text-gray-300"
            >
              Project
            </label>
            <select
              id="countries"
              className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Project1</option>
              <option>Project2</option>
              <option>Project3</option>
            </select>
          </div>

          <div className="mb-1 mt-3">
            <label
              htmlFor="password"
              className="block mb-[1px] text-[12px] font-medium text-gray-900 dark:text-gray-300"
            >
              Task Description
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex items-start mb-6"></div>
          <div className="pb-[20px] flex  items-center justify-left gap-[10px] ">
            <div className="w-[50%]">
              <label
                htmlFor="countries"
                className="block mb-[1px] text-[12px] font-medium text-gray-900 dark:text-gray-300"
              >
                Select your country
              </label>
              <select
                id="countries"
                className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label
                htmlFor="countries"
                className="block mb-[1px] text-[12px] font-medium text-gray-900 dark:text-gray-300"
              >
                Task Priority
              </label>
              <select
                id="countries"
                className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Highest</option>
                <option>High</option>
                <option>Moderate</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <div className="">
            <label
              htmlFor="countries"
              className="block mb-[1px] text-[12px] font-medium text-gray-900 dark:text-gray-300"
            >
              Tag
            </label>
            <select
              id="countries"
              className="max-w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <p className="block mb-[1px] text-[12px] font-medium text-gray-900 dark:text-gray-300 mt-6">
            Attachments
          </p>
          <div className="flex justify-center items-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center w-full h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  className="mb-3 w-10 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[20px] border-t-[1px] px-[30px] ">
          <div className="">
            <button
              type="submit"
              className=" mt-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              type="submit"
              className="ml-[20px] mt-[20px] bg-white text-blue-700 border-[1px] border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-blue-100 transition ease-in-out"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
          <p className="cursor-pointer text-blue-700 text-[12px] font-medium">
            {" "}
            Reset form
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default AddItemModal;
