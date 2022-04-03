import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
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

/*
todo:
1.add env with server - finished
2.add animation in about page - finished
3.add text about me
4.remove familiar with - finished
5.add projects and style projects componenet
6.deploy - finished
7.footer

*/

function App() {
  useEffect(() => {
    document.title = "Amit Arazi";
    Aos.init({ duration: 1500 });
  }, []);

  const [expanded, setExpanded] = useState(false);

  const closeToggleHandler = () => {
    setExpanded(false);
  };

  const toggleHandler = () => {
    setExpanded(expanded ? false : "expanded");
  };

  return (
    <>
      <Navbar expanded={expanded} expand="lg" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand
            className="nav-brand"
            href="#home"
            onClick={closeToggleHandler}
          >
            Amit Arazi
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleHandler}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
        <section onClick={closeToggleHandler} id="home" className="home">
          <Home />
        </section>

        <section onClick={closeToggleHandler} id="about" className="about">
          <About />
        </section>
        <div id="skills"></div>
        <section
          data-aos="fade-up"
          data-aos-once
          onClick={closeToggleHandler}
          className="skills"
        >
          <Skills />
        </section>
        <div id="projects"></div>

        <section
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
