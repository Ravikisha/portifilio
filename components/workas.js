import Image from "next/image";
import React from "react";
import About1 from '../assets/about01.png';
import About2 from '../assets/about02.png';
import About3 from '../assets/about03.png';
import About4 from '../assets/about04.png';


const WorkAs = () => {
  return (
    <>
    <h2 className="p-10 text-5xl font-bold text-center text-black bg-[#f5f5f5]">
          I can <span className="text-purple-500">be a</span>
    </h2>
    <div className="workas">
      <div className="workas__container">
        <div className="workas__card">
          <div className="workas__imgBox">
            <div className="workas__img">
            <Image src={About1} alt="workas" layout={'fill'} objectFit='cover' />
            </div>
          </div>
          <div className="workas__content">
            <div>
              <h2>Frontend Developer</h2>
              <p>
                I am too good at designing interactive and responsive layouts.
              </p>
            </div>
          </div>
        </div>
        <div className="workas__card">
          <div className="workas__imgBox">
            <Image layout={'fill'} objectFit='cover' src={About2} alt="workas" className="workas__img" />
          </div>
          <div className="workas__content">
            <div>
              <h2>Backend Developer</h2>
              <p>
                I love to design complex api, backend servers and databases in many technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="workas__card">
          <div className="workas__imgBox">
          <div className="workas__img">
            <Image src={About3} alt="workas" layout={'fill'} objectFit='cover' />
            </div>
          </div>
          <div className="workas__content">
            <div>
              <h2>App Developer</h2>
              <p>
                I can develop applications for multiple devices and platforms. In this my frontend and backend skills helps me a lot.
              </p>
            </div>
          </div>
        </div>
        <div className="workas__card">
          <div className="workas__imgBox">
          <div className="workas__img">
            <Image src={About4} alt="workas" layout={'fill'} objectFit='cover' />
            </div>
          </div>
          <div className="workas__content">
            <div>
              <h2>ML Engineer</h2>
              <p>
                Currently, I am learning machine learning and deep learning. I am also working on some projects in this field. 
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default WorkAs;
