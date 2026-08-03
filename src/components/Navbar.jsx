import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">

      <div className="container nav-container">

        <h2 className="logo">
          Shams<span>Sagir</span>
        </h2>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a
              href="#home"
              className={active === "home" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === "about" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>

        </ul>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;