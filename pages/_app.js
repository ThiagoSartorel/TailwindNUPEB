import { useEffect } from 'react'
import { useRouter } from 'next/router'
import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "react-quill/dist/quill.snow.css";
import * as gtag from '../lib/gtag'
import Analytics from './components/analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;



