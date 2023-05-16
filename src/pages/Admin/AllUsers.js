import DashboardLayout from "gauravnarnaware/Layout/DashboardLayout";
import { fetchBlogs } from "gauravnarnaware/Store/Slices/blogSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => state);
  // const isLoading = useSelector((state) => state.user.isLoading);
  // const error = useSelector((state) => state.user.error);

  console.log(blogs);
  return <DashboardLayout>Heyt</DashboardLayout>;
};

export default AllUsers;
