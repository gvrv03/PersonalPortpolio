import React from "react";
import BlogCard from "../BlogCard";
import HeaderName from "./HeaderName";

const FeatureBlog = ({ blogs }) => {
  const last = blogs.length;
  const first = last - 3;
  return (
    <div className="container  m-auto">
      <HeaderName name="Blog" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.slice(first, last).map((item) => {
          return (
            <BlogCard
              image={item.image}
              category={item.category}
              title={item.title.substring(0, 80)}
              description={item.description.substring(0, 100) + "..."}
              key={item._id}
              id={item._id}
              views={item.views}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FeatureBlog;
