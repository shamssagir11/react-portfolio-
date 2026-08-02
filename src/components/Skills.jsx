import "./Skills.css";
import {
    FaJava,
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaPython,
} from "react-icons/fa";

import {
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiSpringboot,
    SiTailwindcss,
} from "react-icons/si";

const skills = [
    { icon: <FaJava />, name: "Java", level: "95%" },
    { icon: <SiSpringboot />, name: "Spring Boot", level: "85%" },
    { icon: <SiJavascript />, name: "JavaScript", level: "90%" },
    { icon: <FaReact />, name: "React", level: "90%" },
    { icon: <FaNodeJs />, name: "Node.js", level: "88%" },
    { icon: <SiMongodb />, name: "MongoDB", level: "85%" },
    { icon: <SiMysql />, name: "MySQL", level: "90%" },
    { icon: <FaPython />, name: "Python", level: "75%" },
    { icon: <FaHtml5 />, name: "HTML5", level: "98%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "95%" },
    { icon: <SiTailwindcss />, name: "Tailwind", level: "90%" },
    { icon: <FaGitAlt />, name: "Git", level: "85%" },
    { icon: <FaGithub />, name: "GitHub", level: "90%" },
];

function Skills() {
    return (
        <section className="skills section" id="skills">
            <div className="container">

                <span className="section-tag">MY SKILLS</span>

                <h2 className="section-title">
                    Technologies I Work With
                </h2>

                <p className="section-subtitle">
                    Tools & Technologies that I use to build scalable software.
                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>

                            <div className="skill-icon">
                                {skill.icon}
                            </div>

                            <h3>{skill.name}</h3>

                            <div className="progress">

                                <div
                                    className="progress-bar"
                                    style={{ width: skill.level }}
                                ></div>

                            </div>

                            <span>{skill.level}</span>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;