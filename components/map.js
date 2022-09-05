import Image from "next/image";
import Link from 'next/link';

const Map = () => {
  return (
    <>
      <div className="background">
        <div className="container__mod2">
          <div className="hero">
            <div className="hero-img">
              <Image
                src="https://bit.ly/3wufimz"
                alt="illustration-mockups"
                className="mockup"
                width={600}
                height={500}
                objectFit="contain"

              />
            </div>

            <div className="hero-text">
              <h1 className="head">Languages I can&apos;t speak, Dev & Design Tools that I particularly enjoy</h1>

              <div className="text">
                There are so many technologies out there, and I&apos;m always looking to learn more. I&apos;ve been working with these for a while now, and I&apos;m always looking to learn more.
              </div>

              <Link href="/skills" >
                <div className="btn text">Go to Skills <i className="uil uil-arrow-right"></i></div></Link>
            </div>
          </div>

          <div className="socials">
            <Link href="https://www.linkedin.com/in/ravi-kishan-62ab51221/">
            <a className="btn__social in" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            </Link>
            <Link href="https://twitter.com/">
            <a className="btn__social tw" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            </Link>
            <Link href="https://github.com/ravikisha/" >
            <a  className="btn__social gh" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            </Link>
            <Link href="https://www.instagram.com/ravikishan.69/">
            <a className="btn__social ig" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            </Link>
            <Link href="https://wa.me/7061133910" >
            <a  className="btn__social wh" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
