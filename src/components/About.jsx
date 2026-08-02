import "./About.css";
import profile from "../assets/profile.png";

function About() {
    return (
        <section id="about" className="about section">

            <div className="container about-container">

                <div className="about-image">

                    <img src={profile} alt="Shams Sagir" />

                </div>

                <div className="about-content">

                    <span className="section-tag">ABOUT ME</span>

                    <h2>
                        Passionate Java Developer &
                        <span> Full Stack Enthusiast</span>
                    </h2>

                    <p>
                        I'm <b>Shams Sagir</b>, a Computer Science Engineering student
                        passionate about building scalable web applications and solving
                        real-world problems using Java and modern technologies.
                    </p>

                    <p>
                        I enjoy developing clean UI, secure backend systems and continuously
                        improving my problem-solving skills through Data Structures &
                        Algorithms.
                    </p>

                    <div className="about-cards">

                        <div className="card">
                            <h3>180+</h3>
                            <p>DSA Problems</p>
                        </div>

                        <div className="card">
                            <h3>5+</h3>
                            <p>Projects</p>
                        </div>

                        <div className="card">
                            <h3>2027</h3>
                            <p>Graduation</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;