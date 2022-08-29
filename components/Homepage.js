import React from 'react'
import Social from './social'
import Data from './data'
import ScrollDown from './scrolldown'

const HomePage = () => {
  return (
    <>
    <section className="home section" id="home">
      <div className="home__container container_mod grid_mod">
        <div className="home__content grid_mod">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
    </>
  )
}





export default HomePage