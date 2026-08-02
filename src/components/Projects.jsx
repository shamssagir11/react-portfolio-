import "./Projects.css";

import crashguard from "../assets/crashguard.png";
import pool from "../assets/pool.png";
import portfolio from "../assets/portfolio.png";

const projects = [

    {
        title: "CrashGuard AI",

        image: crashguard,

        description:
            "AI Powered Smart Vehicle Accident Detection & Emergency Alert System using MERN Stack and Machine Learning.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node",
            "MongoDB",
            "Express",
            "AI"
        ],

        github: "#",

        demo: "#"

    },

    {
        title: "Swimming Pool Management",

        image: pool,

        description:
            "Complete Swimming Pool Management System with booking, user dashboard and admin panel.",

        tech: [
            "React",
            "Node",
            "MySQL"
        ],

        github: "#",

        demo: "#"

    },

    {
        title: "Personal Portfolio",

        image: portfolio,

        description:
            "Modern responsive portfolio built with React, animations and premium UI.",

        tech: [
            "React",
            "CSS",
            "JavaScript"
        ],

        github: "#",

        demo: "#"

    }

];

function Projects() {

    return (

        <section
            id="projects"
            className="projects section"
        >

            <div className="container">

                <span className="section-tag">

                    MY PROJECTS

                </span>

                <h2 className="section-title">

                    Featured Projects

                </h2>

                <p className="section-subtitle">

                    Some of my recent work.

                </p>

                <div className="project-grid">

                    {

                        projects.map((project, index) => (

                            <div
                                className="project-card"
                                key={index}
                            >

                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                                <div className="project-content">

                                    <h3>

                                        {project.title}

                                    </h3>

                                    <p>

                                        {project.description}

                                    </p>

                                    <div className="tech">

                                        {

                                            project.tech.map((item, i) => (

                                                <span key={i}>

                                                    {item}

                                                </span>

                                            ))

                                        }

                                    </div>

                                    <div className="project-buttons">

                                        <a
                                            href={project.github}
                                            className="btn btn-outline"
                                        >

                                            GitHub

                                        </a>

                                        <a
                                            href={project.demo}
                                            className="btn"
                                        >

                                            Live Demo

                                        </a>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default Projects;