import { useRouter } from "next/router";
import React from "react";
import { useUserAuth } from "../../lib/Context/UserAuthContext";

const DashboardLayout = ({ children }) => {
  const { user } = useUserAuth();
  const router = useRouter();
  // if (!user) {
  //   router.push("/");
  // }
  return (
    <div className=" pt-24 h-full flex gap-5 container m-auto ">
      <div className="w-1/5  md:block hidden p-5 bg-white dark:bg-gray-900">
        hey mam
      </div>
      <div className="md:w-4/5 w-full p-5 bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
