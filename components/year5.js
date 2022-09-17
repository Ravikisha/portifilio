import React,{useState,useRef,useEffect} from "react";
import Image from 'next/image';
import Link from 'next/link';
const Year5 = () => {
  const [imgSrc,setImgSrc] = useState('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg');
  const [secColor,setSecColor] = useState('#111');

  function makeChanges(src,color){
    setImgSrc(src);
    setSecColor(color);
  }
  return (
    <>
      <section className="sec" style={{background: secColor}} data-aos="fade-up">
        <div className="sec__content">
          <div className="sec__textBox">
            <h2>
              That&apos;s What <br /> <span>I Build</span>
            </h2>
            <p>
              I am a hardly working person. I always try to learn new things and best way to learn is to build something. I have built many projects and I am still learning. I love to do something innovative and creative things.
            </p>
            <div className="flex gap-3">
            <Link href="/projects">View All Projects</Link>
            <Link href="/skills">View My SKills</Link>
            </div>
          </div>
          <div className="sec__imgBox" data-aos="zoom-in" data-aos-delay="200">
            <Image
              src={imgSrc}
              alt="img"
              width={500}
              height={500}
              objectFit={'cover'}
            />
          </div>
        </div>
        <ul className="sec__thumb">
          <li className="animate-bounce animation-delay-100"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={50} height={50} objectFit="cover" alt="react" onClick={()=>makeChanges('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','#111')}/></li>
          <li className="animate-bounce animation-delay-200"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={50} height={50} objectFit="cover" alt="python"  onClick={()=>makeChanges('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg','#293462')}/></li>
          <li className="animate-bounce animation-delay-300"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width={50} height={50} objectFit="cover" alt="flutter" onClick={()=>makeChanges('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg','#194350')}/></li>
        </ul>
      </section>
    </>
  );
};

export default Year5;
