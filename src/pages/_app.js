import Footer from "gauravnarnaware/Component/Footer";
import ScrollToTop from "react-scroll-up";

import Navbar from "gauravnarnaware/Component/Navbar";
import "gauravnarnaware/styles/globals.css";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop showUnder={160}>
        <i className="bi text-3xl text-red-600 bi-arrow-up-square-fill"></i>
      </ScrollToTop>
    </ThemeProvider>
  );
}
