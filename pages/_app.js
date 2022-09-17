import "../styles/globals.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { Progress } from "../components/progress";
import { useProgressStore } from "../components/useProgessStore.js";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, setIsAnimating]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta property="og:title" content="Ravi Kishan:An Introduction" />
        <meta property="og:type" content="Portfolio" />
        <meta
          property="og:image"
          content="https://ravikishan.me/pagepreview.png"
        />
        <meta property="og:url" content="https://ravikishan.me/" />
        <meta name="twitter:card" content="Ravi Kishan:An Introduction" />

        <meta
          property="og:description"
          content="Ravi Kishan is a full stack developer."
        />
        <meta property="og:site_name" content="Ravi Kishan:An Introduction" />
        <meta name="twitter:image:alt" content="Ravi Kishan Portfolio" />
      </Head>
      <Header />
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
