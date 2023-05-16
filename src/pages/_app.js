import Footer from "gauravnarnaware/Component/Footer";
import ScrollToTop from "react-scroll-up";

import Navbar from "gauravnarnaware/Component/Navbar";
import "gauravnarnaware/styles/globals.css";
import { ThemeProvider } from "next-themes";
// import reportWebVitals from "../../reportWebVitals";
import Router from "next/router";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { UserAuthContexProvider } from "../../lib/Context/UserAuthContext";
import { UserThemeContexProvider } from "../../lib/Context/ThemeContext";
import { Provider } from "react-redux";
import store from "gauravnarnaware/Store/store";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <UserAuthContexProvider>
          <UserThemeContexProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <ScrollToTop showUnder={160}>
              <i className="bi text-3xl text-red-600 bi-arrow-up-square-fill"></i>
            </ScrollToTop>
          </UserThemeContexProvider>
        </UserAuthContexProvider>
      </Provider>
    </ThemeProvider>
  );
}

// reportWebVitals(console.log);
