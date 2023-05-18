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
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton from "@mui/material/ToggleButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Navbar = () => {
  const { toggleTheme, themeMode } = useUserTheme();
  const { user, logOut } = useUserAuth();

  const router = useRouter();

  return (
    <>
      <nav className="py-3 px-5 fixed z-50 w-full left-0 backdrop-blur-xl top-0 dark:border-none shadow-md ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <span className="border w-10 h-10 grid  rounded-full place-items-center  text-2xl pColor rotate-45 font-bold">G</span>
            <span className="text-xl  md:block hidden font-semibold ml-2 ">
              Gaurav
            </span>
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
              className="bg-transparent rounded-full p-2 text-xs border  border-gray-200 outline-none"
              placeholder="Search..."
            />

            {/* <ToggleButton
              value="check"
              sx={{
                width: "10px",
                height: "10px",
                background: "white",
                padding: "2px",
                border: "none",
              }}
              selected={themeMode == "light" ? true : false}
              onChange={toggleTheme}
            >
              {themeMode == "light" ? (
                <DarkModeIcon />
              ) : (
                <WbSunnyIcon sx={{ color: "white" }} />
              )}
            </ToggleButton> */}

            {!user ? (
              <Link
                href="/SignIn"
                className=" border w-6 h-6  cursor-pointer grid place-items-center   rounded-full"
              >
                <i className="bi bi-person-fill"></i>
              </Link>
            ) : (
              <UserDropDown />
            )}
            <Sidebar />
          </div>
        </div>
      </nav>
      {/* <Drawer /> */}
    </>
  );
};

export default Navbar;
