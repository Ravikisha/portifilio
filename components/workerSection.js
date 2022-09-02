import React from 'react'
import Man from '../assets/man.png'
import Curve from '../assets/curve.png'
const WorkerSection = () => {
  return (
    <>
    <section className="worker">
        <img src={Curve.src} alt="waves" className="curve__wave" />
        <div className="worker__contentBx">
            <h2>Coming Soon</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid optio hic fugit repudiandae quam nihil reiciendis laborum sed, quibusdam eius? Tempore iste laboriosam veniam!</p>
            <a href="#">Go to Resume</a>
        </div>
        <div className="worker__imgBx">
            <img src={Man.src} alt="img__man" />
        </div>
    </section>
    </>
  )
}

export default WorkerSection