import "./Footer.css";
import {
    FaGithub,
    FaLinkedin,
    FaArrowUp
} from "react-icons/fa";

function Footer() {

    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (

        <footer className="footer">

            <div className="container footer-container">

                <div className="footer-left">

                    <h2>

                        Shams
                        <span>Sagir</span>

                    </h2>

                    <p>

                        Java Full Stack Developer passionate about building
                        scalable and modern web applications.

                    </p>

                </div>

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>

                    <a href="#about">About</a>

                    <a href="#skills">Skills</a>

                    <a href="#projects">Projects</a>

                    <a href="#contact">Contact</a>

                </div>

                <div className="footer-social">

                    <h3>Connect</h3>

                    <div className="icons">

                        <a href="https://github.com/shamssagir11">

                            <FaGithub />

                        </a>

                        <a href="https://www.linkedin.com/">

                            <FaLinkedin />

                        </a>

                    </div>

                </div>

            </div>

            <div className="copyright">

                © 2026 Shams Sagir • All Rights Reserved

            </div>

            <button
                className="scrollTop"
                onClick={scrollTop}
            >

                <FaArrowUp />

            </button>

        </footer>

    );
}

export default Footer;