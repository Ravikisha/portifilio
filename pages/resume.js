import React from "react";
import jsPDF from "jspdf";
import Myphoto from "../assets/about.jpg";
import html2canvas from 'html2canvas';

const Resume = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const generateResume = () => {

    if(typeof window !== 'undefined'){
      // setScaleCv(true);
      const input = document.getElementById("resume");
      html2canvas(input,{logging:true,scale: 2, useCORS: true}).then(canvas => {
          const imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF('p','pt',[canvas.width, canvas.height]);
  var pdfWidth = pdf.internal.pageSize.getWidth();
      var pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0,0,pdfWidth, pdfHeight);
        pdf.save("download.pdf");
        setScaleCv(false);
      }).catch(err => {
        console.log(err);
      })
    }
  }
  // function generateResume() {
  //   var data = document.getElementById('resume');
  //   html2canvas(data, { useCORS:true}) // useCORS is optional if your images are externally hosted somewhere like s3
  //   .then(canvas => {
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
  //     var pdfWidth = pdf.internal.pageSize.getWidth();
  //     var pdfHeight = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(contentDataURL, 'PNG',  pdfWidth, pdfHeight);
  //     //  pdf.save('new-file.pdf');
  //     window.open(pdf.output('bloburl', { filename: 'new-file.pdf' }), '_blank');
  //   });
 
  // }

  return (
    <>
        <div
          className={` ${
            darkTheme ? "dark-theme main__div " : "light-theme main__div"
          }`}
        >
          <div className="resume" id="resume">
            <main className="l-main bd-container">
              <div className="resume__container">
                <div className="resume__left">
                  {/* home */}
                  <section className="resume__home" id="home">
                    <div className="resume__home__container section bd-grid">
                      <div className="resume__home__data bd-grid">
                        <img
                          src={Myphoto.src}
                          alt="MyImage"
                          className="resume__home__img"
                        />

                        <h1 className="resume__home__title">
                          Ravi <b>Kishan</b>
                        </h1>
                        <h3 className="resume__home__profession">
                          Full Stack Developer
                        </h3>

                        <div>
                          <a
                          data-html2canvas-ignore
                            download=""
                            href="#"
                            className="resume__home__button__movil"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                      <div className="resune__home__address bd-grid">
                        <span className="resume__home__information">
                          <i className="uil uil-map-marker resume__home__icon"></i>{" "}
                          Sari. Samastipur #123 Bihar - India
                        </span>
                        <span className="resume__home__information">
                          <i className="uil uil-envelopes resume__home__icon"></i>{" "}
                          ravikishan63392@gmail.com
                        </span>
                        <span className="resume__home__information">
                          <i className="uil uil-phone resume__home__icon"></i>{" "}
                          +91-7061133910
                        </span>
                      </div>
                    </div>
                    <i
                    data-html2canvas-ignore
                      className={
                        darkTheme
                          ? "uil uil-sun resume__home__change__theme"
                          : "uil uil-moon resume__home__change__theme"
                      }
                      title="Theme"
                      id="theme-button"
                      onClick={() => setDarkTheme(!darkTheme)}
                    ></i>
                    <i
                    data-html2canvas-ignore
                      className="uil uil-download-alt resume__home__generate-pdf"
                      title="Generate PDF"
                      id="resume-button"
                      onClick={()=>generateResume()}
                    ></i>
                  </section>
                  {/* social */}
                  <section className="resume__social resume__section">
                    <h2 className="resume__section__title">SOCIAL</h2>
                    <div className="resume__social__container bd-grid">
                      <a
                        href=""
                        target="_blank"
                        className="resume__social__link"
                      >
                        <i className="uil uil-linkedin resume__social__icon"></i>{" "}
                        @Ravikishan
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="resume__social__link"
                      >
                        <i className="uil uil-instagram resume__social__icon"></i>{" "}
                        @Ravikishan
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="resume__social__link"
                      >
                        <i className="uil uil-facebook resume__social__icon"></i>{" "}
                        @Ravikishan
                      </a>
                    </div>
                  </section>
                  <section
                    className="resume__profile resume__section"
                    id="profile"
                  >
                    <h2 className="resume__section__title">Profile</h2>
                    <p className="resume__profile__description">
                      I am a Full Stack Developer with 1+ years of experience in
                      the development of web applications. I have worked on
                      various projects using different technologies. I am a
                      quick learner and a team player. I am always ready to
                      learn new technologies and improve my skills. I am looking
                      for a challenging role in a reputed organization where I
                      can utilize my skills and knowledge to the best of my
                      abilities.
                    </p>
                  </section>
                  <section
                    className="resume__education resume__section"
                    id="education"
                  >
                    <h2 className="resume__section__title">Education</h2>
                    <div className="resume__education__container bd-grid">
                      <div className="resume__education__content">
                        <div className="resume__education__time">
                          <span className="resume__education__rounded"></span>
                          <span className="resume__education__line"></span>
                        </div>
                        <div className="resume__education__data bd-grid">
                          <h3 className="resume__education__title">
                            {" "}
                            Master of Programming{" "}
                          </h3>
                          <span className="resume__education__studies">
                            University of Sheild
                          </span>
                          <span className="resume__education__year">
                            2010 - 2015
                          </span>
                        </div>
                      </div>
                      <div className="resume__education__content">
                        <div className="resume__education__time">
                          <span className="resume__education__rounded"></span>
                          <span className="resume__education__line"></span>
                        </div>
                        <div className="resume__education__data bd-grid">
                          <h3 className="resume__education__title">
                            {" "}
                            Bachlor of Programming{" "}
                          </h3>
                          <span className="resume__education__studies">
                            University of Sheild
                          </span>
                          <span className="resume__education__year">
                            2007 - 2010
                          </span>
                        </div>
                      </div>
                      <div className="resume__education__content">
                        <div className="resume__education__time">
                          <span className="resume__education__rounded"></span>
                          <span className="resume__education__line"></span>
                        </div>
                        <div className="resume__education__data bd-grid">
                          <h3 className="resume__education__title">
                            {" "}
                            Basic of Programming{" "}
                          </h3>
                          <span className="resume__education__studies">
                            University of Sheild
                          </span>
                          <span className="resume__education__year">
                            2005 - 20007
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="resume__skills resume__section" id="skills">
                    <h2 className="resume__section__title">Skills</h2>

                    <div className="resume__skills__content bd-grid">
                      <ul className="resume__skills__data">
                        <li className="resume__skills__name">
                          <span className="resume__skills__circle"></span>Python
                        </li>
                        <li className="resume__skills__name">
                          <span className="resume__skills__circle"></span>
                          Javascript
                        </li>
                        <li className="resume__skills__name">
                          <span className="resume__skills__circle"></span>DBMS
                        </li>
                        <li className="resume__skills__name">
                          <span className="resume__skills__circle"></span>C++
                        </li>
                      </ul>

                      <ul className="resume__skills__data">
                        <li className="resume__skills__name">
                          <span className="resume__skills__circle"></span>React
                        </li>
                        <li className="resume__skills__name">
                          <span className="resume__skills__circle"></span>scss
                        </li>
                        <li className="resume__skills__name">
                          <span className="resume__skills__circle"></span>
                          Firebase
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="resume__right">
                  <section
                    className="resume__experience resume__section"
                    id="experience"
                  >
                    <h2 className="resume__section__title">Experience</h2>

                    <div className="resume__experience__container bd-grid">
                      <div className="resume__experience__content">
                        <div className="resume__experience__time">
                          <span className="resume__experience__rounded"></span>
                          <span className="resume__experience__line"></span>
                        </div>
                        <div className="resume__experience__data bd-grid">
                          <h3 className="resume__experience__title">
                            Software Developer
                          </h3>
                          <span className="resume__experience__company">
                            From 2013 to 2015 | Microsoft Corporation
                          </span>
                          <p className="resume__experience__description">
                            I have worked on various projects using different
                            technologies. I am a quick learner and a team
                            player. I am always ready to learn new technologies
                            and improve my skills. I am looking for a
                            challenging role in a reputed organization where I
                            can utilize my skills and knowledge to the best of
                            my abilities.
                          </p>
                        </div>
                      </div>
                      <div className="resume__experience__content">
                        <div className="resume__experience__time">
                          <span className="resume__experience__rounded"></span>
                          <span className="resume__experience__line"></span>
                        </div>
                        <div className="resume__experience__data bd-grid">
                          <h3 className="resume__experience__title">
                            Software Developer
                          </h3>
                          <span className="resume__experience__company">
                            From 2013 to 2015 | Microsoft Corporation
                          </span>
                          <p className="resume__experience__description">
                            I have worked on various projects using different
                            technologies. I am a quick learner and a team
                            player. I am always ready to learn new technologies
                            and improve my skills. I am looking for a
                            challenging role in a reputed organization where I
                            can utilize my skills and knowledge to the best of
                            my abilities.
                          </p>
                        </div>
                      </div>
                      <div className="resume__experience__content">
                        <div className="resume__experience__time">
                          <span className="resume__experience__rounded"></span>
                          <span className="resume__experience__line"></span>
                        </div>
                        <div className="resume__experience__data bd-grid">
                          <h3 className="resume__experience__title">
                            Software Developer
                          </h3>
                          <span className="resume__experience__company">
                            From 2013 to 2015 | Microsoft Corporation
                          </span>
                          <p className="resume__experience__description">
                            I have worked on various projects using different
                            technologies. I am a quick learner and a team
                            player. I am always ready to learn new technologies
                            and improve my skills. I am looking for a
                            challenging role in a reputed organization where I
                            can utilize my skills and knowledge to the best of
                            my abilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="resume__certificate resume__section"
                    id="certificates"
                  >
                    <h2 className="resume__section__title">Certificates</h2>
                    <div className="resume__certificate__container bd-grid">
                      <div className="resume__certificate__content">
                        <h3 className="resume__certificate__title">
                          {" "}
                          Microsoft Certified Professional - Web Developer
                        </h3>
                        <p className="resume__certificate__description">
                          Microsoft Certified Professional - Web Developer -
                          MCPWD - 1 - 2019 - Microsoft Corporation - Redmond, WA
                          - USA - Microsoft Corporation for the exprience of my
                          web development skills
                        </p>
                      </div>
                      <div className="resume__certificate__content">
                        <h3 className="resume__certificate__title">
                          {" "}
                          Microsoft Certified Professional - Web Developer
                        </h3>
                        <p className="resume__certificate__description">
                          Microsoft Certified Professional - Web Developer -
                          MCPWD - 1 - 2019 - Microsoft Corporation - Redmond, WA
                          - USA - Microsoft Corporation for the exprience of my
                          web development skills
                        </p>
                      </div>
                      <div className="resume__certificate__content">
                        <h3 className="resume__certificate__title">
                          {" "}
                          Microsoft Certified Professional - Web Developer
                        </h3>
                        <p className="resume__certificate__description">
                          Microsoft Certified Professional - Web Developer -
                          MCPWD - 1 - 2019 - Microsoft Corporation - Redmond, WA
                          - USA - Microsoft Corporation for the exprience of my
                          web development skills
                        </p>
                      </div>
                    </div>
                  </section>
                  <section
                    className="resume__references resume__section"
                    id="references"
                  >
                    <h2 className="resume__section__title">References</h2>

                    <div className="resume__references__container bd-grid">
                      <div className="resume__references__content bd-grid">
                        <span className="resume__references__subtitle">
                          Sr. Director
                        </span>
                        <h3 className="resume__references__title">
                          Mr. John Doe
                        </h3>
                        <ul className="resume__references__contact">
                          <li>Phone: 999-777-666</li>
                          <li>Email: user@email.com</li>
                        </ul>
                      </div>
                      <div className="resume__references__content bd-grid">
                        <span className="resume__references__subtitle">
                          Sr. Director
                        </span>
                        <h3 className="resume__references__title">
                          Mr. John Doe
                        </h3>
                        <ul className="resume__references__contact">
                          <li>Phone: 999-777-666</li>
                          <li>Email: user@email.com</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section className="resume__languages resume__section">
                    <h2 className="resume__section__title">Languages</h2>

                    <div className="resume__languages__container">
                      <ul className="resume__languages__content bd-grid">
                        <li className="resume__languages__name">
                          <span className="resume__languages__circle"></span>{" "}
                          English
                        </li>
                        <li className="resume__languages__name">
                          <span className="resume__languages__circle"></span>{" "}
                          Hindi
                        </li>
                        <li className="resume__languages__name">
                          <span className="resume__languages__circle"></span>{" "}
                          Mathili
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="resume__interests resume__section">
                    <h2 className="resume__section__title">Interests</h2>

                    <div className="resume__interests__container bd-grid">
                      <div className="resume__interests__content">
                        <i className="uil uil-music"></i>
                        <span className="resume__interests__name">Music</span>
                      </div>
                      <div className="resume__interests__content">
                        <i className="uil uil-music"></i>
                        <span className="resume__interests__name">Music</span>
                      </div>
                      <div className="resume__interests__content">
                        <i className="uil uil-music"></i>
                        <span className="resume__interests__name">Music</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </main>
            <a data-html2canvas-ignore href="#" className="scrollTop" id="scroll-top">
              <i className="uil uil-arrow-up scrollTop__icon"></i>
            </a>
          </div>
        </div>
    </>
  );
};

export default Resume;
