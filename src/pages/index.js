import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeaderName = (props) => {
  return (
    <div className="my-10  grid place-items-center">
      <h2 className=" text-4xl font-bold">{props.name}</h2>
      <div className="h-1 w-16 bg-red-600 rounded mt-5"></div>
    </div>
  );
};
const FeatureBlog = () => {
  const BlogCard = () => {
    return (
      <div className="p-4 w-full md:w-96">
        <div className="h-full rounded-sm">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/720x400"
            alt="blog"
          />
          <div className="p-5 bg-white dark:bg-gray-900">
            <h2 className="tracking-widest text-xs title-font text-gray-500 dark:text-gray-600 font-medium mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-bold dark:text-white  mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3 dark:text-gray-300 text-gray-600">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
              </a>
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
                1.2K
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
  };

  return (
    <div className="container  m-auto">
      <HeaderName name="Blog" />
      <div className="flex  flex-wrap items-center  justify-center   gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
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

  return (
    <div className="container p-5 m-auto">
      <HeaderName name="My Skills" />

      <div className="flex flex-wrap -m-4">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        More
      </button>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="container m-auto">
      <HeaderName name="Contact Us" />
      <div className="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">
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
              <a className="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-50 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white p-5 rounded-sm shadow-sm dark:bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 dark:text-white text-lg mb-1 text-center font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
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
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-sm text-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <section className="text-gray-600 h-screen  body-font  ">
      <div className="container mx-auto flex px-5 py-10 md:flex-row h-full flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex mt-20 md:mt-0 flex-col md:items-start md:text-left mb-16 md:mb-0  ">
          <h1 className="font-semibold flex  items-center text-black dark:text-white text-4xl mb-5">
            I am
            <span className="ml-2 font-bold -z-50 text-red-600 text-center ">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Software Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="mb-8 leading-relaxed dark:text-slate-200">
            Hi there! Im a passionate web developer with a love for all things
            digital. I have been in the industry for over 2 years, and during
            that time, I have honed my skills in HTML, CSS, JavaScript, and
            other web development frameworks.
          </p>
          <div className="">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sign In
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Hire me
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 bg-red-500 w-5/6">
          <Image
            width={1000}
            height={500}
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero2.gif"
          />
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div className="container p-5 m-auto">
      <HeaderName name="About Us" />
      <div className=" ">
        <div className="w-auto grid place-items-center">
          <Image
            width={300}
            height={100}
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero2.gif"
          />
        </div>
        <div className="text-justify w-full mt-5">
          <h3 className="font-semibold flex  items-center justify-center text-2xl mb-5">
            I am
            <span className="ml-2 font-bold  text-red-600 text-center dark:text-gray-100">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Software Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p>
            Hi there! Im a passionate web developer with a love for all things
            digital. I have been in the industry for over 2 years, and during
            that time, I have honed my skills in HTML, CSS, JavaScript, and
            other web development frameworks.
          </p>
          <div className=" grid place-items-center">
            <button className="py-2 text-center  px-5 bg-red-600 dark:bg-gray-900 text-lg rounded-sm text-white mt-5 font-bold ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <Skills />
      <FeatureBlog />
      <ContactUs />
    </>
  );
}
