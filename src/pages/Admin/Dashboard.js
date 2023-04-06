import DashboardLayout from "gauravnarnaware/Layout/DashboardLayout";
import { useRouter } from "next/router";
import React from "react";
import { useUserAuth } from "../../../lib/Context/UserAuthContext";

const StatHeader = () => {
  const HeaderCard = () => {
    return (
      <div class="">
        <div class="  px-5 py-5 bg-gray-100 flex gap-5 justify-center items-center dark:bg-gray-800 rounded-sm">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="dark:text-red-600 text-indigo-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <div className=" ">
            <h2 class="title-font font-medium  dark:text-gray-200 text-xl ">
              2.7K
            </h2>
            <p class="leading-relaxed text-sm dark:text-gray-200 ">Downloads</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section class="text-gray-600 body-font">
      <div class="container  mx-auto">
        <div class="grid gap-5 grid-cols-2 md:grid-cols-4 ">
          <HeaderCard />
          <HeaderCard />
          <HeaderCard />
          <HeaderCard />
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => {
  const { user } = useUserAuth();
  const router = useRouter();



  return (
    <div className="">
      <DashboardLayout>
        {/* Header User Details */}
        <div className=" justify-between items-center  rounded-full  flex mb-5">
          <div className="bg-gray-100 dark:bg-gray-800 font-bold px-10 py-2 rounded-full ">
            Hello!{" "}
            <span className="dark:text-red-600 text-indigo-600">
              {user && user.displayName}
            </span>{" "}
          </div>

          <div className="rounded-full   bg-gray-100  dark:bg-gray-800 overflow-hidden p-1 w-auto">
            <img
              className="w-10 h-10 rounded-full"
              src={user && user.photoURL}
              alt={user && user.displayName}
            />
          </div>
        </div>

        {/* <div className="w-full my-5 h-1 bg-gray-50 dark:bg-gray-700 mt-5 rounded-full" /> */}

        {/* Header Statistic */}
        <StatHeader />
      </DashboardLayout>
      <div></div>
    </div>
  );
};

export default Dashboard;
