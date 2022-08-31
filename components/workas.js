import React from "react";
import About1 from '../assets/about01.png';
import About2 from '../assets/about02.png';
import About3 from '../assets/about03.png';
import About4 from '../assets/about04.png';


const WorkAs = () => {
  return (
    <>
    <h2 className="p-10 text-5xl font-bold text-center text-black bg-[#f5f5f5]">
          I am <span className="text-purple-500">a</span>
    </h2>
    <div className="workas">
      <div className="workas__container">
        <div className="workas__card">
          <div className="workas__imgBox">
            <img src={About1.src} alt="workas" className="workas__img" />
          </div>
          <div className="workas__content">
            <div>
              <h2>Food One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="workas__card">
          <div className="workas__imgBox">
            <img src={About2.src} alt="workas" className="workas__img" />
          </div>
          <div className="workas__content">
            <div>
              <h2>Food Two</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="workas__card">
          <div className="workas__imgBox">
            <img src={About3.src} alt="workas" className="workas__img" />
          </div>
          <div className="workas__content">
            <div>
              <h2>Food Three</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="workas__card">
          <div className="workas__imgBox">
            <img src={About4.src} alt="workas" className="workas__img" />
          </div>
          <div className="workas__content">
            <div>
              <h2>Food Four</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
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
