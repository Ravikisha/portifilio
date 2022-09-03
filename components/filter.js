import React,{useEffect} from 'react';

const Filter = ({popular,setFiltered,activeFilter,setActiveFilter}) => {
    useEffect(() => {
        if(activeFilter === "All"){
            setFiltered(popular);
        }else{
            setFiltered(popular.filter(PL => PL.tags.includes(activeFilter)));
        }
    },[activeFilter]);
  return (
    <>
        <div className="flex justify-center align-center my-10 gap-4 flex-wrap">
            <button onClick={()=>setActiveFilter('All')} className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 ${activeFilter === 'All' ? 'bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold' : ''}`}>
                All
            </button>
            <button onClick={()=>setActiveFilter('javascript')} className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${activeFilter === 'javascript' ? 'bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold' : ''}`}>
            JavaScript
            </button>
            <button onClick={()=>setActiveFilter('python')}className={`hover:bg-teal-100 bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500  ${activeFilter === 'python' ? ' bg-black text-gray-100 hover:text-gray-100 hover:bg-black font-bold' : ''}`}>
            Python
            </button>
        </div>
    </>
  )
}

export default Filter