import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { data } from "./data_pl";
import Card from './card'; 
import Filter from "./filter";

const Languages = () => {
    const [PLData, setPLData] = useState(data);
    const [filterData, setFilterData] = useState(data);
    const [activeFilter, setActiveFilter] = useState("All");
    useEffect(() => {
        console.log(data);
    },[]);
  return(
    <>
    <div className="PL__container">
    <h2 className="text-4xl font-bold mb-2 text-center">Skills</h2>
    <h2 className="text-2xl mb-2 text-center">See what i know about <span className="text-sky-500 font-bold text-3xl underline">programming</span></h2>
        <Filter popular={PLData} setFiltered={setFilterData} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <motion.div >
            <AnimatePresence>
                <div className="PL__content">
            {filterData.map((PL) => {
                return(
                   <Card key={PL.name} PL={PL}/>
                )
            }
            )};
            </div>
            </AnimatePresence>
        </motion.div>
    </div>
    
    </>
  )
};

export default Languages;
