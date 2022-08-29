import React, { useState, useEffect, useRef } from "react";

const Strength = () => {
  return (
    <>
    {/* <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10 mt-10 ">
          Strength & <span className="text-sky-500">Weakness</span>
        </h2>
      <div className="strength">
        <div className="strength__strength_part">
        <h4 className="text-3xl font-bold text-white mb-3">
              Conference Objectives
            </h4>
            <p className="mb-8">
              <ol className="style_1">
                <li>
                  To identify and acknowledge pioneering and innovative efforts
                  in the area of Industry 4.0
                </li>
                <li>
                  To explore the association between Industry 4.0 & sustainable
                  business practices.
                </li>
                <li>
                  To discuss issues related to innovation, Industry 4.0,
                  sustainable business practices, organizational growth and
                  effectiveness.
                </li>
                <li>
                  To bring plethora of speakers, academicians, researchers,
                  management thinkers, and businessman at one platform.
                </li>
                <li>
                  To motivate, recognize, appreciate and guide the budding
                  researchers and contribute towards the pool of research and
                  benefit the society.
                </li>
              </ol>
            </p>
        </div>
        <div className="strength__weak_part">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Conference Objectives
            </h4>
            <p className="mb-8">
              <ol className="style_1">
                <li>
                  To identify and acknowledge pioneering and innovative efforts
                  in the area of Industry 4.0
                </li>
                <li>
                  To explore the association between Industry 4.0 & sustainable
                  business practices.
                </li>
                <li>
                  To discuss issues related to innovation, Industry 4.0,
                  sustainable business practices, organizational growth and
                  effectiveness.
                </li>
                <li>
                  To bring plethora of speakers, academicians, researchers,
                  management thinkers, and businessman at one platform.
                </li>
                <li>
                  To motivate, recognize, appreciate and guide the budding
                  researchers and contribute towards the pool of research and
                  benefit the society.
                </li>
              </ol>
            </p>
          </div>
        </div> */}

      <div className="container min-h-2/3 max-w-screen-xl mx-auto py-10 px-7 md:px-16" id="overview">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10 ">
          Strength & <span className="text-sky-500">Weakness</span>
        </h2>
        <div className="flex items-center flex-wrap mb-20  relatve">
        <div className="w-full md:w-1/2 p-5 bg-black text-white h-full flex justify-center flex-col relative">
            <h4 className="text-2xl md:text-3xl text-white font-bold mb-3">
              Strength
            </h4>
            <div className="mb-8 text-sm md:text-md">
              <ol className="style_1">
                <li>
                  To identify and acknowledge pioneering and innovative efforts
                  in the area of Industry 4.0
                </li>
                <li>
                  To explore the association between Industry 4.0 & sustainable
                  business practices.
                </li>
                <li>
                  To discuss issues related to innovation, Industry 4.0,
                  sustainable business practices, organizational growth and
                  effectiveness.
                </li>
                <li>
                  To bring plethora of speakers, academicians, researchers,
                  management thinkers, and businessman at one platform.
                </li>
                <li>
                  To motivate, recognize, appreciate and guide the budding
                  researchers and contribute towards the pool of research and
                  benefit the society.
                </li>
              </ol>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-5 h-full flex justify-center flex-col relative">
            <h4 className="text-2xl md:text-3xl text-gray-800 font-bold mb-3 ">
              Weakness
            </h4>
            <div className="mb-8 text-sm md:text-md">
              <ol className="style_1">
                <li>
                  To identify and acknowledge pioneering and innovative efforts
                  in the area of Industry 4.0
                </li>
                <li>
                  To explore the association between Industry 4.0 & sustainable
                  business practices.
                </li>
                <li>
                  To discuss issues related to innovation, Industry 4.0,
                  sustainable business practices, organizational growth and
                  effectiveness.
                </li>
                <li>
                  To bring plethora of speakers, academicians, researchers,
                  management thinkers, and businessman at one platform.
                </li>
                <li>
                  To motivate, recognize, appreciate and guide the budding
                  researchers and contribute towards the pool of research and
                  benefit the society.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strength;
