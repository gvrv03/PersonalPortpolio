import Auth from "gauravnarnaware/Layout/Auth";
import React, { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../../lib/Context/UserAuthContext";
import { useRouter } from "next/router";
import { DefButton } from "gauravnarnaware/Component/UtilComponent";

const SignIn = () => {
  const [userData, setuserData] = useState({});
  const [requiredState, setRequired] = useState(false);
  const { signUIn, user } = useUserAuth();
  const [msg, setmsg] = useState("");
  const [loading, setloading] = useState(false);

  const router = useRouter();

  if (msg) {
    setTimeout(() => {
      setmsg("");
    }, 4000);
  }
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
    setloading(true);
    try {
      await signUIn(userData.email, userData.password);
      setloading(false);

      router.push("/");
    } catch (error) {
      setmsg(error.code);
      setloading(false);
    }
  };
  return (
    <Auth>
      <div className="w-full bg-white rounded-sm shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
        <div className="px-5 space-y-4 md:space-y-6 pt-5 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
            Sign In
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
              <Link
                href="/Forgot"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>
            <DefButton
              loading={loading}
              func={handleSubmit}
              name="Sign In"
              btnStyle="text-white pBtn px-5 py-2 w-full"
            />
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
