import { BiLogoGmail } from "react-icons/bi";
import { FaMapMarked } from "react-icons/fa";
import "./Contact.scss";
function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <FaMapMarked  className="icon"/>
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Nagpur , Maharashtra</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <BiLogoGmail  className="icon"/>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="sdgsnehal@gmail.com">sdgsnehal@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
