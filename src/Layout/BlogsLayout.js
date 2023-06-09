import React from "react";

const BlogsLayout = ({ children }) => {
  const HeaderName = (props) => {
    return (
      <h2 className="font-bold text-lg relative">
        {props.name}
        <span className="w-16 -mb-2 bg-red-600 h-1  dark:bg-indigo-500 absolute left-0 bottom-0" />
      </h2>
    );
  };

  const SingleBlogCard = () => {
    return (
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-sm justify-start items-center gap-5 p-2">
        <span className="text-4xl dark:text-gray-200 text-slate-500 font-bold">
          01
        </span>
        <span>
          <h4 className="text-xs font-semibold">
            Using dangerouslySetInnerHTML in a React application
          </h4>
          <h6 className="text-xs mt-2 font-light">Python</h6>
        </span>
      </div>
    );
  };
  return (
    <section className=" m-auto h-screen  container">
      <div className=" pt-20 md:pt-24 h-screen overflow-y-scroll  md:flex-row flex-col gap-5 flex">
        <main className="  w-full md:w-9/12  h-full ">{children}</main>
        <aside className="w-full md:w-1/4 bg-white dark:bg-gray-900  p-5 ">
          <div className=" ">
            <HeaderName name="Popular Post" />
            <div className="mt-5 h-64 overflow-y-scroll flex flex-col gap-5">
              <SingleBlogCard />
              <SingleBlogCard />
              <SingleBlogCard />
              <SingleBlogCard />
              <SingleBlogCard />
            </div>
          </div>

          <div className=" mt-10">
            <HeaderName name="Category" />
            <div className="mt-5 flex gap-2 justify-between items-center flex-wrap">
              <button className="bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm dark:bg-gray-800 font-semibold rounded-sm px-5 py-1  ">
                Python
              </button>

              <button className="bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm dark:bg-gray-800 font-semibold rounded-sm px-5 py-1  ">
                Cyber Security
              </button>

              <button className="bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm dark:bg-gray-800 font-semibold rounded-sm px-5 py-1  ">
                Java
              </button>
              <button className="bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm dark:bg-gray-800 font-semibold rounded-sm px-5 py-1  ">
                Cyber Security
              </button>
              <button className="bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm dark:bg-gray-800 font-semibold rounded-sm px-5 py-1  ">
                Next js
              </button>
              <button className="bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm dark:bg-gray-800 font-semibold rounded-sm px-5 py-1  ">
                React
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogsLayout;
