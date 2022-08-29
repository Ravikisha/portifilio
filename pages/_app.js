import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        id="box-icons"
        src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
