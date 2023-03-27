const LandingPage = () => {
  return (
    <section className="text-gray-600 h-screen  body-font ">
      <div className="container mx-auto flex px-5 py-10 md:flex-row h-full flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex mt-20 md:mt-0 flex-col md:items-start md:text-left mb-16 md:mb-0  ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white text-left">
            I'm Gaurav Narnaware
          </h1>
          <p className="mb-8 leading-relaxed dark:text-slate-200">
            Hi there! I'm a passionate web developer with a love for all things
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <LandingPage />
      
    </>
  );
}
