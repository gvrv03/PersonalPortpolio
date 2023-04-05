import Footer from "gauravnarnaware/Component/Footer";
import ScrollToTop from "react-scroll-up";

import Navbar from "gauravnarnaware/Component/Navbar";
import "gauravnarnaware/styles/globals.css";
import { ThemeProvider } from "next-themes";
import PortpolioState from "../../lib/Context/PortpolioState";
// import reportWebVitals from "../../reportWebVitals";
import Router from "next/router";


import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <PortpolioState>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTop showUnder={160}>
          <i className="bi text-3xl text-red-600 bi-arrow-up-square-fill"></i>
        </ScrollToTop>
      </PortpolioState>
    </ThemeProvider>
  );
}

// reportWebVitals(console.log);
