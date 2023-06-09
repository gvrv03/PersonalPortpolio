import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  title,
  category,
  description,
  image,
  id,
  views,
}) {
  return (
    <div className="w-full md:w-auto ">
      <div className=" rounded-sm">
        <img src={image} alt={title} />
        <div className="p-5 bg-white dark:bg-gray-900">
          <h2 className="tracking-widest text-xs title-font text-gray-500 dark:text-gray-600 font-medium mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-bold dark:text-white  mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3 dark:text-gray-300 text-gray-600">
            {description}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              href={{
                pathname: `/Post/Post`,
                query: {
                  title: title,
                  postId: id,
                },
              }}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {views}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
