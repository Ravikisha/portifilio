import Image from "next/image";

const Map = () => {
  return (
    <>
      <div className="background">
        <div className="container__mod2">
          <div className="hero">
            <div className="hero-img">
              <img
                src="https://bit.ly/3wufimz"
                alt="illustration-mockups"
                className="mockup"
              />
            </div>

            <div className="hero-text">
              <h1 className="head">I Build That You Always Love.</h1>

              <div className="text">
                I make websites that serve a purpose and bring value to your
                users. I also love building accessible, inclusive products.
                I&apos;m a full-stack developer based in Gwalior, India.
              </div>

              <button className="btn text">Register</button>
            </div>
          </div>

          <div className="socials">
            <a href="#" className="btn__social in">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="btn__social tw">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn__social gh">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="btn__social ig">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn__social wh">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
