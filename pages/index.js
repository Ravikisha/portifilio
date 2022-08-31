import React from "react";
import Header from "../components/Header";
import HomePage from "../components/Homepage";
import Map from "../components/Map";
import Light from '../components/light';

const Home = () => {
  return (
    <>
      <Header />
      <section className="main">
        <HomePage />
      </section>
      <Light />
      <section className="map">
      <Map className="map__page" />
      </section>
    </>
  );
};

export default Home;
