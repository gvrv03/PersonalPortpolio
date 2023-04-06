import Auth from "gauravnarnaware/Layout/Auth";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useUserAuth } from "../../lib/Context/UserAuthContext";

const Forgot = () => {
  const [userData, setuserData] = useState({});
  const [requiredState, setRequired] = useState(false);
  const [msg, setmsg] = useState("");
  const { resetPassword } = useUserAuth();

  const onChange = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmsg("");

    try {
      await resetPassword(userData.email);
      setmsg("Check your Email");
    } catch (error) {
      setmsg(error.code);
    }
  };
  return (
    <Auth>
      <div className="w-full bg-white rounded-sm shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
        <div className="px-5 space-y-4 md:space-y-6 pt-5 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
            Forgot Password
          </h1>
          {msg != "" && (
            <h3 className="bg-red-100 text-center py-2 border border-red-200 font-bold text-red-700 dark:bg-gray-800 dark:text-white dark:border-gray-600">
              {msg}
            </h3>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </div>
              <input
                type="email"
                required={requiredState}
                onChange={onChange}
                id="email"
                // value={setuserData.email ? setuserData.email : ""}
                name="email"
                className=" text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none bg-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>

            <button
              type="submit"
              className="w-full  text-white bg-indigo-500 dark:bg-red-500  dark:hover:bg-red-600 hover:bg-indigo-600 rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 font-semibold"
            >
              Forgot Password
            </button>
            <p className="text-sm font-light text-gray-500  dark:text-gray-400">
              Don&apos;t have an account yet ?{" "}
              <Link
                href="/SignUp"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Auth>
  );
};

export default Forgot;
