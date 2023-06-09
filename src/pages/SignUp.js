import Auth from "gauravnarnaware/Layout/Auth";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "../../lib/Context/UserAuthContext";
import { async } from "@firebase/util";
import { set } from "nprogress";
import { useRouter } from "next/router";

const SignIn = () => {
  const [userData, setuserData] = useState({});
  const { signUp, user } = useUserAuth();
  const [requiredState, setRequired] = useState(false);
  const [msg, setmsg] = useState("");
  const router = useRouter();
  const onChange = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  if (user) {
    router.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmsg("");
    try {
      await signUp(userData.email, userData.password);
      console.log(user);
      router.push("/SignIn");
    } catch (error) {
      setmsg(error.code);
    }
  };
  console.log(userData);
  return (
    <Auth>
      <div className="w-full bg-white rounded-sm shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
        <div className="px-5 space-y-4 md:space-y-6 pt-5 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
            Sign Up
          </h1>
          {msg != "" && (
            <h3 className="bg-red-100 text-center py-2 border border-red-200 font-bold text-red-700 dark:bg-gray-800 dark:text-white dark:border-gray-600">
              {msg}
            </h3>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                required={requiredState}
                onChange={onChange}
                name="userName"
                className=" text-gray-900 sm:text-sm rounded-sm  outline-none block w-full p-2.5 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Your Name"
              />
            </div> */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                required={requiredState}
                onChange={onChange}
                name="email"
                className=" text-gray-900 sm:text-sm rounded-sm  outline-none block w-full p-2.5 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                required={requiredState}
                onChange={onChange}
                name="password"
                id="password"
                placeholder="••••••••"
                className=" text-gray-900 sm:text-sm rounded-sm  outline-none block w-full p-2.5 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              />
            </div>
            {/* <div>
              <label
                htmlFor="cpassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Conform Password
              </label>
              <input
                type="password"
                required={requiredState}
                onChange={onChange}
                name="cPassword"
                placeholder="••••••••"
                className=" text-gray-900 sm:text-sm rounded-sm  outline-none block w-full p-2.5 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              />
            </div> */}

            <p className="text-xs text-justify">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy.
            </p>
            <button
              type="submit"
              className="w-full  text-white bg-indigo-500 dark:bg-red-500  dark:hover:bg-red-600 hover:bg-indigo-600 rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 font-semibold"
            >
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500  dark:text-gray-400">
              Already Have an Account?{" "}
              <Link
                href="/SignIn"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Auth>
  );
};

export default SignIn;
