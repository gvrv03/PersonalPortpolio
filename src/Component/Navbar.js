import TopNav from "gauravnarnaware/NavItem/TopNav";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const [sidebar, setsidebar] = useState("hidden");
  function toggleTheme() {
    setIsChecked(!isChecked);
    setTheme(theme === "light" ? "dark" : "light");
  }

  const Drawer = () => {
    return (
      <>
        <div className={` w-full fixed  ${sidebar} md:hidden`}>
          <div
            className="w-full h-screen fixed cursor-pointer bg-black opacity-60"
            onClick={() => {
              setsidebar("hidden");
            }}
          />
          <div className="z-50 text-black p-5 fixed h-screen bg-white dark:text-white dark:bg-gray-900 w-3/4">
            <div>
              <span className="font-bold text-base">Gaurav</span>
            </div>
            <div className="dark:bg-gray-800 bg-gray-200 flex justify-center items-center mt-5">
              <input
                type="search"
                className="p-2 w-4/5 bg-transparent outline-none"
                placeholder="Search Blog..."
              />
              <div className="w-1/5 grid place-items-center  text-black dark:text-white">
                <button type="button">
                  <i className=" bi bi-search "></i>
                </button>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              {TopNav.map((i, index) => {
                return (
                  <button
                    key={index}
                    className=" w-full py-1 text-black dark:text-white text-left font-semibold"
                    type="button"
                  >
                    <i className={`bi ${i.icon} mr-5`}></i>
                    {i.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <nav className="py-3 px-5 fixed w-full left-0 backdrop-blur-xl border shadow-sm dark:border-none dark:shadow-md border-gray-200 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <Image
              width={20}
              height={100}
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6  sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="text-xl ml-2 font-semibold  dark:text-white">
              Gaurav
            </span>
          </a>
          <div
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center py-2  text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <label className="relative inline-flex mr-5 items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={toggleTheme}
                className="sr-only peer "
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
            <button
              type="button"
              onClick={() => {
                setsidebar(sidebar == "hidden" ? "block" : "hidden");
              }}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 gap-5 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:">
              {TopNav.map((i, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      <i className={`bi ${i.icon} mr-3 `}></i>
                      {i.name}
                    </a>
                  </li>
                );
              })}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleTheme}
                  className="sr-only peer "
                />
                <div className="w-11 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
              </label>
            </ul>
          </div>
        </div>
      </nav>
      <Drawer />
    </>
  );
};

export default Navbar;
