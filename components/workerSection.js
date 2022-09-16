import React from 'react'
import Man from '../public/assets/man.png'
// import Curve from '../public/assets/curve.png'
import Image from 'next/image';
import Link from 'next/link';
const WorkerSection = () => {
  return (
    <>
    <section className="worker">
      <div className="curve__wave">
        <Image src={'../public/assets/curve.png'} alt="waves" width={500} height={500} objectFit="cover"/>
        </div>
        <div className="worker__contentBx">
            <h2>Work With Me</h2>
            <p>I am currently working on full stack development and machine learning technologies. I am great on working in team and community. You have choice to select me that am i able to serve your esteemed company.</p>
            <Link  href="/resume">
              <div className="gotoresume">
              Go to Resume
            <i className="uil uil-arrow-right"></i>
              </div>
              </Link>
        </div>
        <div className="worker__imgBx">
          <div className="img__man">
            <Image src={Man.src} alt="img__man" width={500} height={500} objectFit='cover' />
          </div>
        </div>
    </section>
    </>
  )
}

export default WorkerSection