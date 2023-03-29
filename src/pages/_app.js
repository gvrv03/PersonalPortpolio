import Footer from "gauravnarnaware/Component/Footer";
import Navbar from "gauravnarnaware/Component/Navbar";
import "gauravnarnaware/styles/globals.css";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}
