import TopNav from "gauravnarnaware/NavItem/TopNav";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import portpolioContext from "../../lib/Context/portpolioContext";
import { useUserAuth } from "../../lib/Context/UserAuthContext";
import { perf } from "../../firebase";

const Navbar = () => {
  const [sidebar, setsidebar] = useState("-left-full");
  const context = useContext(portpolioContext);
  const { toggleTheme, themeMode } = context;
  const [setdrawer, setsetdrawer] = useState("hidden");
  const { user, logOut } = useUserAuth();
console.log(user);

  const toggleDrawer = () => {
    if (setdrawer == "hidden") {
      setsetdrawer("block");
    } else {
      setsetdrawer("hidden");
    }
  };

  const UserDrawer = () => {
    return (
      <div className="relative mr-5">
        <img
          class="w-6 h-6   p-1 rounded-full cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500"
          src={
            user.photoURL
              ? user.photoURL
              : "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          }
          onClick={toggleDrawer}
          alt="Bordered avatar"
        />

        <div
          className={`${setdrawer} absolute bg-white dark:bg-gray-900 right-0 p-5 my-5 border`}
        >
          <h1>
            Hello !{" "}
            <span className="text-indigo-600 dark:text-red-600">
              {user.email}
            </span>{" "}
          </h1>
          <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 my-5 rounded-full" />

          <button
            onClick={() => {
              logOut();
              alert("Logou");
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  };
  const Drawer = () => {
    return (
      <>
        <div className={` w-full z-50 fixed   ${sidebar} md:hidden`}>
          <div
            className="w-full h-screen fixed cursor-pointer backdrop-blur-sm"
            onClick={() => {
              setsidebar("-left-full");
            }}
          />
          <div className="z-50 text-black p-5 fixed h-screen bg-white dark:text-white dark:bg-gray-900 w-3/4">
            <div className="">
              <span className="font-bold text-base ">Gaurav</span>
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
            <div className="mt-5 flex flex-col trans gap-5">
              {TopNav.map((i, index) => {
                return (
                  <Link href={i.location} key={index}>
                    <button
                      onClick={() => {
                        setsidebar("-left-full");
                      }}
                      className=" w-full py-1 text-black dark:text-white text-left font-semibold"
                      type="button"
                    >
                      <i className={`bi ${i.icon} mr-5`}></i>
                      {i.name}
                    </button>
                  </Link>
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
      <nav className="py-3 px-5 fixed z-50 w-full left-0 backdrop-blur-xl dark:border-none shadow-md ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <Image
              width={20}
              height={100}
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6  sm:h-10"
              alt="Flowbite Logo"
              style={{ width: "auto", height: "auto" }}
            />
            <span className="text-xl ml-2 font-semibold  ">Gaurav</span>
          </a>
          <div
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center py-2  text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            {!user ? (
              <Link
                href="/SignIn"
                className=" border w-6 h-6 cursor-pointer grid place-items-center   rounded-full"
              >
                <i className="bi bi-person-fill"></i>
              </Link>
            ) : (
              <UserDrawer />
            )}

            <label className="relative inline-flex gap-5 mr-5 items-center cursor-pointer">
              <input
                type="checkbox"
                checked={themeMode == "light" ? true : false}
                onChange={toggleTheme}
                className="sr-only peer "
              />
              <div className="w-11 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">
                <i
                  className={`bi ${
                    themeMode == "light"
                      ? " bi-moon-stars-fill text-black"
                      : "bi-brightness-high-fill "
                  }   text-base`}
                ></i>
              </span>
            </label>
            <button
              type="button"
              className="dark:text-white"
              onClick={() => {
                setsidebar(sidebar == "-left-full" ? "left-0" : "-left-full");
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
                    <Link
                      href={i.location}
                      className="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0   md:dark:bg-transparent"
                      aria-current="page"
                    >
                      <i className={`bi ${i.icon} mr-3 `}></i>
                      {i.name}
                    </Link>
                  </li>
                );
              })}

              {!user ? (
                <Link
                  href="/SignIn"
                  className=" border w-6 h-6 cursor-pointer grid place-items-center   rounded-full"
                >
                  <i className="bi bi-person-fill"></i>
                </Link>
              ) : (
                <UserDrawer />
              )}
              <label className="relative inline-flex gap items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={themeMode == "light" ? true : false}
                  onChange={toggleTheme}
                  className="sr-only peer "
                />
                <div className="w-11 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <i
                    className={`bi ${
                      themeMode == "light"
                        ? " bi-moon-stars-fill text-black"
                        : "bi-brightness-high-fill "
                    }   text-base`}
                  ></i>
                </span>
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
