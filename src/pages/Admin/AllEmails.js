import EmailTable from "gauravnarnaware/Component/Table/EmailTable";
import { User } from "gauravnarnaware/DataSet/DataSet";
import DashboardLayout from "gauravnarnaware/Layout/DashboardLayout";
import { fetchBlogs } from "gauravnarnaware/Store/Actions/blogAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllEmails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => state);
  // const isLoading = useSelector((state) => state.user.isLoading);
  // const error = useSelector((state) => state.user.error);

  console.log(blogs);
  return (
    <DashboardLayout>
      <div>
        <div className=" font-semibold    rounded-sm dark:border-gray-700 border-b-2 p-2 bg-white dark:bg-gray-900   flex justify-between ">
          <div>All Emails ({User.length})</div>
          <div className="flex gap-5 justify-between items-center">
            <button>
              <i className="bi bi-arrow-clockwise text-lg" />{" "}
            </button>
            <button
              type="button"
              className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
            >
              Add Email
            </button>
          </div>
        </div>

        <div className="mt-5">
          <EmailTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllEmails;
