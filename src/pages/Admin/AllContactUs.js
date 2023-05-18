import ContactUsTable from "gauravnarnaware/Component/Table/ContactUsTable";
import { User } from "gauravnarnaware/DataSet/DataSet";
import DashboardLayout from "gauravnarnaware/Layout/DashboardLayout";
import React from "react";

const AllContactUs = () => {
  return (
    <DashboardLayout>
      <div>
        <div className=" font-semibold    rounded-sm dark:border-gray-700 border-b-2 p-2 bg-white dark:bg-gray-900   flex justify-between ">
          <div>All Contacts ({User.length})</div>
          <div className="flex gap-5 justify-between items-center">
            <button>
              <i className="bi bi-arrow-clockwise text-lg" />{" "}
            </button>
            <button
              type="button"
              className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
            >
              Add Contact Us
            </button>
          </div>
        </div>

        <div className="mt-5">
          <ContactUsTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllContactUs;
