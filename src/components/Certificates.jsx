import "./Certificates.css";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
    {
        title: "Java Programming",
        issuer: "Oracle / Course",
        year: "2025",
        link: "#",
    },
    {
        title: "Web Development",
        issuer: "Udemy",
        year: "2025",
        link: "#",
    },
    {
        title: "Machine Learning",
        issuer: "Coursera",
        year: "2026",
        link: "#",
    },
];

function Certificates() {
    return (
        <section className="certificates section" id="certificates">
            <div className="container">

                <span className="section-tag">CERTIFICATES</span>

                <h2 className="section-title">
                    Certifications & Achievements
                </h2>

                <p className="section-subtitle">
                    Courses and certifications that strengthened my skills.
                </p>

                <div className="certificate-grid">

                    {certificates.map((item, index) => (

                        <div className="certificate-card" key={index}>

                            <FaCertificate className="certificate-icon" />

                            <h3>{item.title}</h3>

                            <p>{item.issuer}</p>

                            <span>{item.year}</span>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Certificate
                                <FaExternalLinkAlt />
                            </a>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Certificates;