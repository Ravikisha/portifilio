import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Progress } from '../components/progress';
import {useProgressStore} from '../components/useProgessStore.js';

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

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router, setIsAnimating]);
  return (
    <>
      
      <Header />
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
