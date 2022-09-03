import React from 'react'
import Languages from '../components/languages';
import PureParallax from './../components/pureParallax';
import Head from 'next/head';

const Skills = () => {
  return (
    <>
    <Head>
        <title>My Skills</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <PureParallax />
    <Languages />
    </>
  )
}

export default Skills