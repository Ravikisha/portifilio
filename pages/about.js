import React from 'react'
import Character from '../components/character'
// import Parallex from '../components/parallex'
import HeadingAbout from '../components/headingabout'
import Hobbies from '../components/hobbies'
import MyselfAbout from '../components/myselfAbout'
import Strength from '../components/strength'
import SuperHero from '../components/superhero'
import Qualification from './../components/Qualification';


const About = () => {
  return (
    <>
    <div className="about__page">
    <HeadingAbout />
    <Character />
    <MyselfAbout />
    <Strength />
    {/* <SuperHero /> */}
    <Hobbies />
    <Qualification />
    </div>
    </>
  )
}

export default About