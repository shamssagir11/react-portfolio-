import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Certificates from "../components/Certificates";

function Home() {
  return (
    <>
      <Hero />
      <Stats/>
      <About />
      <Skills />
       <Certificates />
      <Projects />
      <Experience />
       <Contact/>
       <Footer/>
    </>
  );
}

export default Home;