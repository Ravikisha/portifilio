import React,{useState,useEffect} from "react";
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';
import Img4 from '../assets/4.png';
import Img5 from '../assets/5.png';
import Img6 from '../assets/6.png';
import Img7 from '../assets/7.png';
import Img8 from '../assets/8.png';
import Img9 from '../assets/9.png';

const PureParallax = () => {
    const [clientXval,setClientXval] = useState(0);
    const [clientYval,setClientYval] = useState(0);

    const HandleMouseMove = (e) => {
        setClientXval(e.clientX);
        setClientYval(e.clientY);
    } 

    const imgMoved = (val) => {
        var x = (clientXval * val) / 250;
        var y = (clientYval * val) / 250;
        return "translateX(" + x + "px) translateY(" + y + "px)";
    }

    useEffect(()=>{
        window.addEventListener("mousemove",HandleMouseMove);
        return () => window.removeEventListener("mousemove",HandleMouseMove);
    },[]);
    
    // console.log(clientXval,clientYval);
  return (
    <>
      <div className="parallax">
        <div className="parallax__container">
          <h2 className="object" data-value="3" style={{transform: imgMoved(3)}}>
            SKILLS
            <br />
            <span></span>
          </h2>
          <img src={Img1.src} className="object" data-value="-2" style={{transform: imgMoved(-2)}} alt="" />
          <img src={Img2.src} className="object" data-value="6" style={{transform: imgMoved(6)}} alt="" />
          <img src={Img3.src} className="object" data-value="4" style={{transform: imgMoved(4)}} alt="" />
          <img src={Img4.src} className="object" data-value="-6" style={{transform: imgMoved(-6)}} alt="" />
          <img src={Img5.src} className="object" data-value="8" style={{transform: imgMoved(8)}} alt="" />
          <img src={Img6.src} className="object" data-value="-4" style={{transform: imgMoved(-4)}} alt="" />
          <img src={Img7.src} className="object" data-value="5" style={{transform: imgMoved(5)}} alt="" />
          <img src={Img8.src} className="object" data-value="-9" style={{transform: imgMoved(-9)}} alt="" />
          <img src={Img9.src} className="object" data-value="-5" style={{transform: imgMoved(-5)}} alt="" />
        </div>
      </div>
    </>
  );
};

export default PureParallax;
