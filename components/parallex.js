import React, { useState, useEffect,useRef } from "react";
import Person from "../assets/person.png";
import mountain1 from "../assets/mountain1.png";
import mountain2 from "../assets/mountain2.png";
import mountain3 from "../assets/mountain3.png";
import Sky from "../assets/sky.png";
import Simage from "../assets/image.jpg";
// import Image from 'next/image';

const Parallex = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [sectionY, setSectionY] = useState(0);

  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const handleScroll = (e) => {
    setOffsetY(window.pageYOffset);
    setSectionY(sectionRef.current.getBoundingClientRect().top);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setHeaderHeight(headerRef.current.offsetHeight);
    setSectionHeight(sectionRef.current.offsetHeight);
    console.log(headerHeight, sectionHeight,sectionY);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="header__mod" ref={headerRef}>
      <nav>
            <div className="container__mod4">
                <h3 className="logo">Brand<span>Name</span></h3>
                <div className="hamburger-menu">
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
        <h1
          className="big-title translate"
          data-speed="0.1"
          style={{ transform: `translateY(${offsetY * 0.1}px)` , opacity: `${-offsetY / (headerHeight / 2) + 1}`}}
        >
          Discover.
        </h1>

        <img
          src={Person.src}
          className="person translate"
          data-speed="-0.25"
          alt=""
          style={{ transform: `translateY(${offsetY * -0.25}px)` }}
        />
        <img
          src={mountain1.src}
          className="mountain1 translate"
          data-speed="-0.2"
          alt=""
          style={{ transform: `translateY(${offsetY * -0.2}px)` }}
        />
        <img
          src={mountain2.src}
          className="mountain2 translate"
          data-speed="0.4"
          alt=""
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        />
        <img
          src={mountain3.src}
          className="mountain3 translate"
          data-speed="0.3"
          alt=""
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        />
        <img
          src={Sky.src}
          className="sky translate"
          data-speed="0.5"
          alt=""
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
      </div>

      <div className="section__mod" ref={sectionRef}>
        <div className="shadow" style={{height: `${offsetY *0.5 + 300}px`}}></div>

        <div className="container__mod4">
          <div className="content opacity" style={{opacity: `${offsetY / (sectionY + sectionHeight)}`,transform: `${offsetY / (sectionY + sectionHeight) * -50 + 50}px`}}>
            <h3 className="title">
              About
              <div className="border" style={{width: `${offsetY / (sectionY + sectionHeight) * 30}%`}}></div>
            </h3>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              officiis quos expedita ipsa, a quidem inventore voluptates debitis
              accusamus tenetur qui et voluptas dicta, culpa earum, doloribus
              odio consectetur consequuntur soluta quasi nobis! Deserunt
              voluptatum reiciendis iure expedita sequi quisquam laboriosam
              temporibus exercitationem.
            </p>
          </div>

          <div className="imgContainer opacity" style={{opacity: `${offsetY / (sectionY + sectionHeight)}`}}>
            <img src={Simage.src} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallex;
