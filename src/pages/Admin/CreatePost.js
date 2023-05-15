import TextEditor from "gauravnarnaware/Component/Admin/TextEditor";
import Sidebar from "gauravnarnaware/Component/Sidebar";
import DashboardLayout from "gauravnarnaware/Layout/DashboardLayout";
import React from "react";
import { useUserAuth } from "../../../lib/Context/UserAuthContext";

const CreatePost = () => {
  return (
    <DashboardLayout>
      <div className="w-full h-screen">
        <div className="  gap-5 flex">
          <input
            type="text"
            className="w-4/5 border-b-2 dark:border-gray-300 border-red-500 bg-transparent outline-none p-2 "
            placeholder="Title"
            name=""
            id=""
          />
          <div className=" w-1/5 flex gap-2">
            <button className="border   flex  gap-2 rounded-full items-center justify-center  p-2 px-3">
              <i className="bi bi-eye-fill" />
              <p className="hidden md:block">Preview</p>
            </button>
            <button className=" flex   gap-2 rounded-full bg-red-600 dark:bg-gray-800 text-white  items-center justify-center  font-semibold  p-2 px-3">
              <i className="bi bi-telegram" />
              <p className="hidden md:block">Publish</p>
            </button>
          </div>
        </div>

        <div className=" w-full flex gap-5 mt-10">
          <div className="w-full md:w-4/5">
            <div className="flex flex-col w-full md:w-60   ">
              <h5 className="text-gray-500">Upload Thumbnail</h5>
              <div>
                <input type="file" name="" className="mt-2" id="" />
                <button className="pBtn w-full py-1 mt-4">Upload</button>
              </div>
            </div>

            <TextEditor />
            <Sidebar/>
          </div>
          <div className="md:flex w-1/5 hidden flex-col gap-5">jfhgskdf</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreatePost;
