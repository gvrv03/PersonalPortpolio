import React from "react";
import { useUserAuth } from "../../lib/Context/UserAuthContext";

const DashboardLayout = ({ children }) => {
  const { user } = useUserAuth();

  if (user.email != "itsgaurav3112003@gmail.com") {
    return (
      <div className="w-full h-screen grid place-items-center">
        <div>
          <img src="" alt="" />
          <h1 className="text-red-800 font-semibold text-center">Website</h1>
          <p>Under Construction</p>
        </div>
      </div>
    );
  }

  if (user && user.emailVerified) {
    return (
      <div className=" pt-24 h-screen  container m-auto ">
        <div className=" w-full p-5 bg-white dark:bg-gray-900">{children}</div>
      </div>
    );
  } else {
    return <div className=" pt-24 h-full  container m-auto ">Login First</div>;
  }
};

export default DashboardLayout;
