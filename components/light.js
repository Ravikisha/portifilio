import React,{useState} from "react";
import LampImg from "../assets/lamp.png";
import LightImg from "../assets/light.png";

const Light = () => {
    const [checked,setChecked] = useState(true);
  return (
    <>
      <div className="light__hero">
        <div className="light__lamp__container">
          <img src={LampImg.src} alt="" className="light__lamp__lamp-image" />
          {checked && 
          <img src={LightImg.src} alt="" className="light__lamp__light-image" />}
        </div>
        <div className="light__text__container">
          <h1>Latest in Lighting</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            totam, alias consequuntur suscipit illo eius officia rem quae
            reiciendis molestiae, natus provident culpa dolorem
            laudantiumnumquam.
          </p>
          <a href="#">Check All Collections</a>
          <div className="light__text__container__label">
            <input type="checkbox"
            defaultChecked={checked}
            onChange={()=>setChecked(!checked)} />
            <span className="light__text__container__label__span">
              <i className="uil uil-lightbulb-alt"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Light;
