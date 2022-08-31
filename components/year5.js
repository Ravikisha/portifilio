import React,{useState,useRef,useEffect} from "react";

const year5 = () => {
  // const main_img = useRef(null);
  // const sec = useRef(null);
  // useEffect(()=>{
  //   function makeChanges(src,color){
  //     main_img.current.src = src;
  //     sec.current.style.backgroundColor = color;
  //   }
  //   return ()=>makeChanges();
  // },[]);
  const [imgSrc,setImgSrc] = useState('https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png');
  const [secColor,setSecColor] = useState('#111');

  function makeChanges(src,color){
    setImgSrc(src);
    setSecColor(color);
  }
  return (
    <>
      <section className="sec" style={{background: secColor}}>
        <div className="sec__content">
          <div className="sec__textBox">
            <h2>
              That&apos;s What <br /> <span>I Like</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              illum totam ad placeat alias harum corrupti libero nisi id?
              Numquam maxime debitis libero explicabo quasi repellat ex harum
              sunt officia, perferendis incidunt.
            </p>
            <a href="#">View All Products</a>
          </div>
          <div className="sec__imgBox">
            <img
              src={imgSrc}
              alt="img"
            />
          </div>
        </div>
        <ul className="sec__thumb">
          <li><img src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png" alt="python" onClick={()=>makeChanges('https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png','#444')}/></li>
          <li><img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="js"  onClick={()=>makeChanges('https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png','#666')}/></li>
          <li><img src="https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png" alt="dbms" onClick={()=>makeChanges('https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png','#222')}/></li>
        </ul>
      </section>
    </>
  );
};

export default year5;
