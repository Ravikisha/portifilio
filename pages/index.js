import React from "react";
import HomePage from "../components/Homepage";
import Map from "../components/map";
import Light from '../components/light';
import ThreeDPage from "../components/threed_page";
import WorkerSection from './../components/workerSection';
import Head from 'next/head';
const Home = () => {
  return (
    <>
    <Head>
        <title>Ravi Kishan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="main">
        <HomePage />
      </section>
      <Light />
      <ThreeDPage/>
      <section className="map">
      <Map className="map__page" />
      </section>
      <WorkerSection />
    </>
  );
};

export default Home;
