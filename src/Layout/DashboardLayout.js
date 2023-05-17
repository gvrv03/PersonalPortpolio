import { DashNav } from "gauravnarnaware/NavItem/TopNav";
import { useRouter } from "next/router";
import React from "react";
import { useUserAuth } from "../../lib/Context/UserAuthContext";

const DashboardLayout = ({ children }) => {
  const { user } = useUserAuth();
  const router = useRouter();
  // if (user.email != "itsgaurav3112003@gmail.com") {
  //   return (
  //     <div className="w-full h-screen grid place-items-center">
  //       <div>
  //         <img src="" alt="" />
  //         <h1 className="text-red-800 font-semibold text-center">Website</h1>
  //         <p>Under Construction</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (user && user.emailVerified) {
    return (
      <div className=" pt-24  container m-auto ">
        <div className="flex flex-col md:flex-row mt-5 gap-5">
          <aside className=" p-5 h-fit  hidden md:grid w-full gap-2 md:w-3/12 place-items-start  dark:bg-gray-900 bg-white">
            <button
              onClick={() => {
                router.push("/Admin/CreatePost");
              }}
              className="text-red-500 flex gap-5 items-center justify-center dark:border-gray-800 dark:text-white dark:bg-gray-500 shadow-md border font-bold w-40 rounded-full py-3"
            >
              <i className="bi bi-plus-lg" />
              <p>New Post</p>
            </button>

            {DashNav.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    router.push(item.location);
                  }}
                  className=" flex w-full gap-5 mt-5 rounded-md text-left px-5  font-semibold "
                >
                  <i className={`${item.icon} `} />
                  <p>{item.name} </p>
                </button>
              );
            })}
          </aside>
          <div className="w-full ">
            <div className=" h-screen">{children}</div>
          </div>
        </div>
      </div>
    );
  }
  // else {
  //   return <div className=" pt-24 h-full  container m-auto ">Login First</div>;
  // }
};

export default DashboardLayout;
