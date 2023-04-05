import BlogsLayout from "gauravnarnaware/Layout/BlogsLayout";
import { useRouter } from "next/router";
import React from "react";
import { getsingle } from "../../../lib/Functions/getBlogs";
import Link from "next/link";
import Image from "next/image";

const BlogData = ({ blogs }) => {
  const router = useRouter();
  const { title, category, description, image, artical, author, views } =
    blogs.post;
  return (
    <BlogsLayout>
      <div className="bg-white h-full dark:bg-gray-900 p-5 ">
        <nav className="pb-5 flex  justify-between" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <Link href="/Blogs" className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Blogs
                </span>
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  {title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="h-90 overflow-y-scroll">
          <section className="">
            <h1 className="font-bold text-lg md:text-3xl">{title}</h1>
            <div className="mt-5 flex justify-between text-sm">
              <div>
                <span className="font-semibold mr-2">Author:</span>
                {author}
              </div>
              <div>
                {" "}
                <i className=" bi bi-eye-fill mr-2"></i> {views}{" "}
              </div>
            </div>
          </section>

          <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 mt-5 rounded-full" />
          <section className="mt-5">
            <img src={image} alt={title} />
            <article
              className="overflow-y-scroll  mt-5"
              dangerouslySetInnerHTML={{ __html: artical }}
            />
          </section>
        </div>
      </div>
    </BlogsLayout>
  );
};

export async function getServerSideProps(context) {
  const { postId } = context.query;
  const data = await getsingle(postId);
  return {
    props: { blogs: data },
  };
}

export default BlogData;
