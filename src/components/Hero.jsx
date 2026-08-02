import { motion } from "framer-motion";
import "./Hero.css";
import { useEffect, useState } from "react";
import profile from "../assets/portfolio.png";

import {
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
    FaDownload,
    FaArrowDown,
} from "react-icons/fa";

function Hero() {
    const roles = [
        "Java Developer",
        "Full Stack Developer",
        "Backend Developer",
        "Problem Solver",
    ];

    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            className="hero"
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background Blobs */}
            <div className="hero-blob blob1"></div>
            <div className="hero-blob blob2"></div>

            <div className="container hero-container">

                {/* LEFT SIDE */}
                <motion.div
                    className="hero-left"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                >

                    <span className="hero-tag">
                        👋 Welcome to my Portfolio
                    </span>

                    <h3>Hello, I'm</h3>

                    <h1>
                        Shams <span>Sagir</span>
                    </h1>

                    <motion.h2
                        className="typing-text"
                        key={roleIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4 }}
                    >
                        {roles[roleIndex]}
                    </motion.h2>

                    <p className="hero-description">
                        Passionate Computer Science student focused on
                        Java Development, Backend Engineering, React,
                        Problem Solving and building real-world software
                        that creates impact.
                    </p>

                    <div className="hero-btns">

                        <a href="#contact" className="btn">
                            <FaPaperPlane />
                            Hire Me
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline"
                        >
                            <FaDownload />
                            Resume
                        </a>

                    </div>

                    <div className="hero-social">

                        <a
                            href="https://github.com/shamssagir11"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/shams-sagir-b6b2aa2b0/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                </motion.div>

                {/* RIGHT SIDE */}

                <motion.div
                    className="hero-right"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                >

                    <motion.div
                        className="profile-wrapper"
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                    >

                        <div className="profile-ring">

                            <img
                                src={profile}
                                alt="Shams Sagir"
                            />

                            <motion.div
                                className="floating-card card1"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                }}
                            >
                                <span>☕ Java</span>
                            </motion.div>

                            <motion.div
                                className="floating-card card2"
                                animate={{
                                    y: [0, 12, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.5,
                                }}
                            >
                                <span>⚛ React</span>
                            </motion.div>

                            <motion.div
                                className="floating-card card3"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.8,
                                }}
                            >
                                <span>💻 Backend</span>
                            </motion.div>

                        </div>

                    </motion.div>

                </motion.div>

            </div>

            <motion.a
                href="#about"
                className="scroll-down"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}
            >
                <FaArrowDown />
            </motion.a>

        </motion.section>
    );
}

export default Hero;