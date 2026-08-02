import "./Experience.css";
import { FaGraduationCap, FaBriefcase, FaAward } from "react-icons/fa";

function Experience() {
    return (
        <section className="experience section" id="experience">

            <div className="container">

                <span className="section-tag">
                    MY JOURNEY
                </span>

                <h2 className="section-title">
                    Education & Experience
                </h2>

                <p className="section-subtitle">
                    My learning journey and professional growth.
                </p>

                <div className="timeline">

                    {/* Education */}

                    <div className="timeline-item">

                        <div className="timeline-icon">
                            <FaGraduationCap />
                        </div>

                        <div className="timeline-content">

                            <span>2023 - 2027</span>

                            <h3>B.Tech Computer Science Engineering</h3>

                            <h4>IES College of Technology, Bhopal</h4>

                            <p>
                                Pursuing B.Tech in Computer Science with focus on Java,
                                Full Stack Development, DBMS, Operating System,
                                Computer Networks and Machine Learning.
                            </p>

                        </div>

                    </div>

                    {/* Internship */}

                    <div className="timeline-item">

                        <div className="timeline-icon">
                            <FaBriefcase />
                        </div>

                        <div className="timeline-content">

                            <span>Currently Learning</span>

                            <h3>Full Stack Java Developer</h3>

                            <h4>Self Learning</h4>

                            <p>
                                Building production-ready projects using React,
                                Spring Boot, MySQL, MongoDB and REST APIs.
                            </p>

                        </div>

                    </div>

                    {/* Achievement */}

                    <div className="timeline-item">

                        <div className="timeline-icon">
                            <FaAward />
                        </div>

                        <div className="timeline-content">

                            <span>Achievements</span>

                            <h3>DSA & Projects</h3>

                            <h4>Continuous Learning</h4>

                            <p>
                                Solved 85+ DSA problems and developed multiple
                                full stack applications with responsive UI.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Experience;