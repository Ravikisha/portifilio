import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { data } from "./data_cert";

const Certificate = () => {
  const [cert, setCert] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      <div className="PL__container" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-4xl font-bold mb-2 text-center">Certificates</h2>
        <h2 className="text-2xl mb-2 text-center">
          See what i certified about{" "}
          <span className="text-sky-500 font-bold text-3xl underline">
            programming
          </span>
        </h2>
        <Filter
          popular={cert}
          setFiltered={setFilterData}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <motion.div>
          <AnimatePresence>
            <div className="PL__content">
              {filterData.map((cert) => {
                return (
                  <div key={cert.name} data-aos="zoom-in-up" className="px-4 md:px-0">
                    <Card cert={cert} />
                  </div>
                );
              })}
              ;
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Certificate;

const Filter = ({ popular, setFiltered, activeFilter, setActiveFilter }) => {
  useEffect(() => {
    if (activeFilter === "All") {
      setFiltered(popular);
    } else {
      setFiltered(popular.filter((PL) => PL.tags.includes(activeFilter)));
    }
  }, [activeFilter]);
  return (
    <>
      <div className="flex justify-center align-center my-10 gap-4 flex-wrap">
        <button
          onClick={() => setActiveFilter("All")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 ${
            activeFilter === "All"
              ? "bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("PL")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${
            activeFilter === "PL"
              ? "bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          Programming Language
        </button>
        <button
          onClick={() => setActiveFilter("frontend")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${
            activeFilter === "frontend"
              ? "bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveFilter("backend")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${
            activeFilter === "backend"
              ? " bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveFilter("app")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${
            activeFilter === "app"
              ? " bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          App Developement
        </button>
        <button
          onClick={() => setActiveFilter("devops")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${
            activeFilter === "devops"
              ? " bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          DevOps
        </button>
        <button
          onClick={() => setActiveFilter("aiml")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${
            activeFilter === "aiml"
              ? " bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          AI/ML/DS
        </button>
        <button
          onClick={() => setActiveFilter("others")}
          className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${
            activeFilter === "others"
              ? " bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold"
              : ""
          }`}
        >
          Others
        </button>
      </div>
    </>
  );
};

export const Card = (props) => {
    const {title, description, image, link, linkedin, tags} = props.cert;
  return (
    <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="ui/ux review check"
        />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
        </h4>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700 overflow-auto">
            {description}
        </p>
      </div>
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center -space-x-3">
          <img
            alt="natali craig"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
          />
          <img
            alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
          />
        </div>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          January 10
        </p>
      </div>
    </div>
  );
};
