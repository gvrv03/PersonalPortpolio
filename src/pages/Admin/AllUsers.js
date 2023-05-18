import UserTable from "gauravnarnaware/Component/Table/UserTable";
import EnhancedTable from "gauravnarnaware/Component/Table/UserTable";
import { User } from "gauravnarnaware/DataSet/DataSet";
import DashboardLayout from "gauravnarnaware/Layout/DashboardLayout";
import React, { useEffect } from "react";

const AllUsers = () => {
  return (
    <DashboardLayout>
      <div>
        <div className=" font-semibold    rounded-sm dark:border-gray-700 border-b-2 p-2 bg-white dark:bg-gray-900   flex justify-between ">
          <div>All User ({User.length})</div>
          <div className="flex gap-5 justify-between items-center">
            <button>
              <i className="bi bi-arrow-clockwise text-lg" />{" "}
            </button>
            <button
              type="button"
              className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
            >
              Add User
            </button>
          </div>
        </div>

        <div className="mt-5">
          <UserTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllUsers;
