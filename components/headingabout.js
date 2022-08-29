import React, { useState, useRef, useEffect } from "react";

const HeadingAbout = () => {
  const [show, setShow] = useState(true);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const dot = useRef(null);
  const handleDot = (e) => {
    setLeft(e.pageX);
    setTop(e.pageY);
  };
  const clickHandler = () => {
    setShow(!show);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleDot);
    return () => {
      window.removeEventListener("mousemove", handleDot);
    };
  }, []);
  return (
    <>
      <div className={show ? "main__about active__mod" : "main__about"} onClick={clickHandler}>
        <h2 className="h2__mod">About</h2>
         <video className="about__video" autoPlay loop muted>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-holding-a-coffee-cup-1726-large.mp4" />
        </video>
        <div className={show ? "dot active__mod" : "dot"} ref={dot} style={{top: top,left: left}}></div>
      </div>
    </>
  );
};

export default HeadingAbout;
