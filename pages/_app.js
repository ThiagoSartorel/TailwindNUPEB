import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "react-quill/dist/quill.snow.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
