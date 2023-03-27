import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";
import Home from "./Componenets/Home/Home";
import About from "./Componenets/About/About";
import Skills from "./Componenets/Skills/Skills";
import Contact from "./Componenets/Contact/Contact";
import Footer from "./Componenets/Footer/Footer";
import Projects from "./Componenets/Projects/Projects";

function App() {
  useEffect(() => {
    document.title = "Amit Arazi";
    Aos.init({ duration: 1500 });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const closeToggleHandler = () => {
    setExpanded(false);
  };

  const toggleHandler = () => {
    setExpanded(expanded ? false : "expanded");
  };

  const onScroll = (e) => {
    const heights = [
      {
        id: "#home",
        position: homeRef.current?.offsetTop,
        height: homeRef.current?.clientHeight,
      },
      {
        id: "#about",
        position: aboutRef.current?.offsetTop,
        height: aboutRef.current?.clientHeight,
      },
      {
        id: "#skills",
        position: skillsRef.current?.offsetTop,
        height: skillsRef.current?.clientHeight,
      },
      {
        id: "#projects",
        position: projectsRef.current?.offsetTop,
        height: projectsRef.current?.clientHeight,
      },
      {
        id: "#contact",
        position: contactRef.current?.offsetTop,
        height: contactRef.current?.clientHeight,
      },
    ];
    const windowHeight = Math.ceil(window.pageYOffset);
    const avtive = heights.find(
      (height) =>
        windowHeight >= height.position &&
        windowHeight < height.position + height.height
    );
    setActiveSection(avtive.id);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar expanded={expanded} expand="lg" fixed="top" variant="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleHandler}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={activeSection} className="me-auto">
              <Nav.Link href="#home" onClick={closeToggleHandler}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={closeToggleHandler}>
                About
              </Nav.Link>
              <Nav.Link href="#skills" onClick={closeToggleHandler}>
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" onClick={closeToggleHandler}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={closeToggleHandler}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <section
          ref={homeRef}
          onClick={closeToggleHandler}
          id="home"
          className="home"
        >
          <Home />
        </section>

        <section
          ref={aboutRef}
          onClick={closeToggleHandler}
          id="about"
          className="about"
        >
          <About />
        </section>
        <div id="skills"></div>
        <section
          ref={skillsRef}
          data-aos="fade-up"
          data-aos-once
          onClick={closeToggleHandler}
          className="skills"
        >
          <Skills />
        </section>
        <div id="projects"></div>

        <section
          ref={projectsRef}
          data-aos="fade-up"
          data-aos-once
          onClick={closeToggleHandler}
          id="projects"
          className="projects"
        >
          <Projects />
        </section>
        <div id="contact"></div>

        <section
          ref={contactRef}
          data-aos="fade-up"
          data-aos-once
          onClick={closeToggleHandler}
          id="contact"
          className="contact"
        >
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
