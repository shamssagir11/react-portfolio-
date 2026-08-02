import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact section" id="contact">

      <div className="container">

        <span className="section-tag">
          CONTACT
        </span>

        <h2 className="section-title">
          Let's Work Together
        </h2>

        <p className="section-subtitle">
          Have a project or internship opportunity? Let's connect.
        </p>

        <div className="contact-container">

          {/* Left */}

          <div className="contact-info">

            <div className="info-card">

              <FaEnvelope className="info-icon"/>

              <div>
                <h4>Email</h4>
                <p>yourmail@gmail.com</p>
              </div>

            </div>

            <div className="info-card">

              <FaPhoneAlt className="info-icon"/>

              <div>
                <h4>Phone</h4>
                <p>+91 XXXXX XXXXX</p>
              </div>

            </div>

            <div className="info-card">

              <FaMapMarkerAlt className="info-icon"/>

              <div>
                <h4>Location</h4>
                <p>Bhopal, Madhya Pradesh</p>
              </div>

            </div>

            <div className="social-links">

              <a href="https://github.com/shamssagir11">
                <FaGithub/>
              </a>

              <a href="https://linkedin.com">
                <FaLinkedin/>
              </a>

            </div>

          </div>

          {/* Right */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button className="btn">

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;