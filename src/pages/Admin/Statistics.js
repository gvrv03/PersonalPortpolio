import HeaderStat from "gauravnarnaware/Component/Admin/HeaderStat";
import DashboardLayout from "gauravnarnaware/Layout/DashboardLayout";
import React from "react";

const Statistics = () => {
  return (
    <DashboardLayout>
      <div className="p-5 bg-white dark:bg-gray-900" >
        <HeaderStat />
      </div>{" "}
    </DashboardLayout>
  );
};

export default Statistics;
