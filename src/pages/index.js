import { getBlogs } from "../../lib/Functions/getBlogs";
import FeatureBlog from "gauravnarnaware/Component/Home/FeatureBlog";
import ContactUs from "gauravnarnaware/Component/Home/ContactUs";
import AboutUs from "gauravnarnaware/Component/Home/AboutUs";
import Skills from "gauravnarnaware/Component/Home/Skills";
import LandingPage from "gauravnarnaware/Component/Home/LandingPage";

export default function Home({ blogs }) {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <Skills />
      <FeatureBlog  />
      <ContactUs />
    </>
  );
}

