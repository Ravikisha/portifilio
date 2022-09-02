import React from "react";
import Header from "../components/Header";
import HomePage from "../components/Homepage";
import Map from "../components/Map";
import Light from '../components/light';
import ThreeDPage from "../components/threed_page";
import WorkerSection from './../components/workerSection';
const Home = () => {
  return (
    <>
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
