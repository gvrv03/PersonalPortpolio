import Auth from "gauravnarnaware/Layout/Auth";
import React, { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../../lib/Context/UserAuthContext";
import { useRouter } from "next/router";

const SignIn = () => {
  const [userData, setuserData] = useState({});
  const [requiredState, setRequired] = useState(false);
  const { signUIn, user } = useUserAuth();
  const [msg, setmsg] = useState("");
  const router = useRouter();

  if (user) {
    router.push("/");
  }
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
      await signUIn(userData.email, userData.password);
      // localStorage.setItem("accessToken", user.accessToken);
      router.push("/");
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
            Sign In
          </h1>
          <h3>{msg}</h3>

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
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </div>
              <input
                type="password"
                required={requiredState}
                onChange={onChange}
                id="password"
                // value={setuserData.password ? setuserData.password : ""}
                name="password"
                placeholder="••••••••"
                className=" text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none bg-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full  text-white bg-indigo-500 dark:bg-red-500  dark:hover:bg-red-600 hover:bg-indigo-600 rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 font-semibold"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500  dark:text-gray-400">
              Don&apos;t have an account yet?{" "}
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

export default SignIn;
