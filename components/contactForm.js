import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contact overflow-x-hidden">
        <section className="contact__section">
        {/* <span className="mybefore"></span>
        <span className="myafter"></span> */}
          <div className="contact__container">
            <h2>Contact To Me</h2>
          <div className="contact__row100">
            <div className="contact__col">
              <div className="contact__inputBox">
                <input type="text" name="" required="required" />
                <span className="text">First Name</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="contact__col">
              <div className="contact__inputBox">
                <input type="text" name="" required="required" />
                <span className="text">Last Name</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="contact__row100">
            <div className="contact__col">
              <div className="contact__inputBox">
                <input type="text" name="" required="required" />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="contact__col">
              <div className="contact__inputBox">
                <input type="text" name="" required="required" />
                <span className="text">Phone</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="contact__row100">
            <div className="contact__col">
              <div className="contact__inputBox contact__textarea">
                <textarea required="required"></textarea>
                <span className="text">Type Your Message Here...</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="contact__row100">
            <div className="contact__col">
              <input type="submit" value="Send" />
            </div>
          </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactForm;
