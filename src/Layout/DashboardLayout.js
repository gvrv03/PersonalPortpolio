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
            <button
              onClick={() => {
                router.push("/Admin/Statistics");
              }}
              className="bg-red-50 flex w-full gap-5 mt-5 rounded-md text-left px-5 py-2 font-semibold dark:bg-gray-800"
            >
              <i className="bi bi-pen-fill" />
              <p>Stats</p>
            </button>
            <button
             onClick={() => {
              router.push("/Admin/AllBlogs");
            }}
             className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-newspaper" />
              <p>Posts</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-card-text" />
              <p>Pages</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-envelope-fill" />
              <p>Messages</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-cast" />
              <p>Projects</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-telephone-fill" />
              <p>Contacts Us</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-bag-fill" />
              <p>Product</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-inbox-fill" />
              <p>All Email</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-person-fill" />
              <p>Users</p>
            </button>
            <button className=" flex w-full gap-5 rounded-md text-left px-5 py-2 font-semibold">
              <i className="bi bi-gear-fill" />
              <p>Setting</p>
            </button>
          </aside>
          <div className="w-full ">
            <div className="p-5 bg-white dark:bg-gray-900">{children}</div>
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
