import AllSkills from "gauravnarnaware/Component/AllSkills";
import BlogCard from "gauravnarnaware/Component/BlogCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import { useContext } from "react";
import portpolioContext from "../../lib/Context/portpolioContext";
import Link from "next/link";
import { getBlogs } from "../../lib/Functions/getBlogs";
const HeaderName = (props) => {
  return (
    <div className="my-10 mt-20 grid place-items-center">
      <h2 className=" text-4xl font-bold">{props.name}</h2>
      <div className="h-1 w-16 bg-red-600 rounded mt-5"></div>
    </div>
  );
};
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

const Skills = () => {
  const SkillCard = () => {
    return (
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-white p-6 rounded-sm shadow-sm dark:bg-gray-900">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium dark:text-white title-font mb-2">
            Shooting Stars
          </h2>
          <p className="leading-relaxed text-black text-sm dark:text-slate-300">
            Fingerstache flexitarian street art 8-bit waist co, subway tile poke
            farm.
          </p>
        </div>
      </div>
    );
  };

  const [modalState, setmodalState] = useState("hidden");
  return (
    <div className="container m-auto">
      <HeaderName name="My Skills" />

      <div className="flex flex-wrap -m-4">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <button
        onClick={() => {
          setmodalState("grid");
        }}
        className="flex mx-auto mt-16 text-white border-0 py-2 px-8 focus:outline-none bg-indigo-500 dark:bg-red-500  dark:hover:bg-red-600 hover:bg-indigo-600  rounded text-lg"
      >
        More
      </button>

      <AllSkills mState={modalState} fun={setmodalState} />
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="container m-auto">
      <HeaderName name="Contact Us" />
      <div className="container   mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 -z-50 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute  inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680107453899!5m2!1sen!2sin"
          ></iframe>
          <div className="bg-white dark:bg-gray-900 dark:text-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-50 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-50 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-50 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white p-5 -z-50 rounded-sm shadow-sm dark:bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 dark:text-white text-lg mb-1 text-center font-medium title-font">
            Contact Us
          </h2>
          {/* <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p> */}
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm dark:text-gray-300 text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-slate-50  dark:text-white rounded-sm dark:bg-gray-800  focus:border-indigo-500 focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="subject"
              className="leading-7 text-sm dark:text-gray-300 text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full bg-slate-50  dark:text-white rounded-sm dark:bg-gray-800  focus:border-indigo-500 focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 dark:text-gray-300 text-sm text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-slate-50  dark:text-white rounded-sm dark:bg-gray-800  focus:border-indigo-500 focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7  dark:text-gray-300 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-slate-50  dark:text-white rounded-sm dark:bg-gray-800  focus:border-indigo-500 focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 dark:bg-red-500  dark:hover:bg-red-600 hover:bg-indigo-600  border-0 py-2 px-6 focus:outline-nonerounded-sm text-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const context = useContext(portpolioContext);
  const { theme, themeMode } = context;
  return (
    <section
      className={`text-gray-600 ${
        themeMode == "light" ? "gradientA" : "gradientB"
      }  h-screen -mx-5 body-font `}
    >
      <div className="container mx-auto justify-center flex-col flex pt-10 h-full items-center">
        <div className=" relative w-2/4 h-2/4 flex items-center justify-center">
          <div className=" rounded-full overflow-hidden md:h-96 md:w-96   w-60 h-60 grid place-items-center p-10 border-8 shadow-2xl  border-white ">
            <Image
              width={500}
              height={500}
              alt="Gaurav Narnaware"
              src="/gaurav.svg"
              className="md:h-96 md:w-96   w-60 h-60 "
            />
          </div>
          {/* <div className="absolute left-16 px-10 py-5 float  dark:text-white border border-gray-500 backdrop-blur-md rounded-sm top-5">
              Web Developer
            </div> */}
        </div>
        <h1 className="md:text-7xl mt-0 md:mt-10 text-3xl flex text-white font-bold">
          <span className="mr-3"> I am </span>
          <Typewriter
            options={{
              strings: ["Web Developer", "Software Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h3 className="text-xl text-gray-200 mt-5 font-bold">
          Based in Maharashtra, India.
        </h3>

        <div className=" text-white relative font-bold float mt-20 flex gap-5 justify-center items-center px-20 py-5 rounded-full">
          <div className=" w-10 rounded-full h-20 grid place-items-center border-2">
            <div className="w-1 bg-white h-10" />
          </div>
          <div>Swipe Up</div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div className="container  m-auto">
      <HeaderName name="About Us" />
      <div className=" ">
        <div className="-z-50 w-auto h-80 rounded-full  overflow-hidden grid place-items-center">
          <Image
            width={300}
            height={100}
            className="object-cover object-center rounded"
            alt="hero"
            // style={{width:"auto",height:"auto"}}
            src="/gaurav.svg"
          />
        </div>
        <div className="text-justify w-full mt-10">
          <h3 className="font-semibold flex  items-center justify-center text-2xl mb-5">
            I am
            <span className="ml-2 font-bold  text-red-600 text-center ">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Software Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="text-center">
            Hi there! Im a passionate web developer with a love for all things
            digital. I have been in the industry for over 2 years, and during
            that time, I have honed my skills in HTML, CSS, JavaScript, and
            other web development frameworks.
          </p>
          <div className=" grid place-items-center">
            <a
              href="/gvrvresume.pdf"
              download
              className="py-2 text-center px-10  bg-indigo-500 dark:bg-red-500  dark:hover:bg-red-600 hover:bg-indigo-600   text-lg rounded-sm text-white mt-5 font-bold "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home({ blogs }) {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <Skills />
      <FeatureBlog blogs={blogs} />
      <ContactUs />
    </>
  );
}

export async function getServerSideProps() {
  const data = await getBlogs();
  return {
    props: { blogs: data },
  };
}
