import TopNav from "gauravnarnaware/NavItem/TopNav";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUserAuth } from "../../lib/Context/UserAuthContext";
import { perf } from "../../firebase";
import { useRouter } from "next/router";
import { useUserTheme } from "../../lib/Context/ThemeContext";
import Sidebar from "./Sidebar";
import UserDropDown from "./UserDropDown";

const Navbar = () => {
  const { toggleTheme, themeMode } = useUserTheme();
  const { user, logOut } = useUserAuth();
  
  const router = useRouter();


  // const UserDrawer = () => {
  //   return (
  //     // <div className="relative ">
  //     //   <img
  //     //     className="w-6 h-6   p-1 rounded-full cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500"
  //     //     src={
  //     //       user.photoURL
  //     //         ? user.photoURL
  //     //         : "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
  //     //     }
  //     //     onClick={toggleDrawer}
  //     //     alt="Bordered avatar"
  //     //   />

  //     //   <div
  //     //     className={`${setdrawer} absolute bg-white dark:bg-gray-900 right-0 p-5 my-5 border dark:border-gray-600`}
  //     //   >
  //     //     <h1>
  //     //       Hello !{" "}
  //     //       <span className="text-indigo-600 dark:text-red-600">
  //     //         {user.email}
  //     //       </span>{" "}
  //     //     </h1>
  //     //     <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 my-5 rounded-full" />

  //     //     <button
  //     //       onClick={() => {
  //     //         logOut();
  //     //         alert("Logou");
  //     //       }}
  //     //     >
  //     //       Sign Out
  //     //     </button>
  //     //   </div>
  //     // </div>
  //   );
  // };

  return (
    <>
      <nav className="py-3 px-5 fixed z-50 w-full left-0 backdrop-blur-xl dark:border-none shadow-md ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <span className="text-xl  font-semibold  ">Gaurav</span>
          </Link>
          <div
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center py-2  gap-5 text-sm text-gray-500 rounded-lg dark:text-gray-400 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <input
              type="search"
              className=" md:block hidden border dark:border-gray-700  dark:bg-gray-800 px-5 outline-none p-2 w-full rounded-full"
              placeholder="Search... "
              name=""
              id=""
            />

            {!user ? (
              <Link
                href="/SignIn"
                className=" border w-6 h-6  cursor-pointer grid place-items-center   rounded-full"
              >
                <i className="bi bi-person-fill"></i>
              </Link>
            ) : (
              <UserDropDown/>
            )}

            <label className="relative inline-flex gap-5  items-center cursor-pointer">
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
            <Sidebar />
          </div>
        </div>

        <input
          type="search"
          className=" border md:hidden block dark:border-gray-700  dark:bg-gray-800 px-5 outline-none p-2 w-full rounded-full"
          placeholder="Search... "
          name=""
          id=""
        />
      </nav>
      {/* <Drawer /> */}
    </>
  );
};

export default Navbar;
