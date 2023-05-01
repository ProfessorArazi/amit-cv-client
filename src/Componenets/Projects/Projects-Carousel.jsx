import "../../scss/App.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import amit from "../../img/leamit.png";

export const ProjectsCarousel = (props) => {
  const [slide, setSlide] = useState(props.projects[0]);

  return (
    <>
      <div className="carousel-background">
        <img className="carousel-background__img" src={amit} alt="" />
        <Carousel
          onClickItem={() => (window.location.href = slide.link)}
          className="carousel"
          onChange={(i) => setSlide(props.projects[i])}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          transitionTime={0}
          infiniteLoop
        >
          {props.projects.map((project, i) => (
            <button key={project.link} className="carousel-slide__wrapper">
              <img
                className="carousel-slide"
                key={project.title + i}
                src={project.img}
                alt={project.title}
              />
            </button>
          ))}
        </Carousel>
      </div>
      <div>
        <h2>{slide.title}</h2>
        <div className="projects-project__desc">{slide.text}</div>
        <div className="actions">
          <button
            onClick={() =>
              (window.location.href =
                "https://github.com/ProfessorArazi?tab=repositories")
            }
            className="dark-btn"
          >
            Github
          </button>
          <button
            onClick={() => (window.location.href = slide.link)}
            className="dark-btn"
          >
            Live
          </button>
        </div>
      </div>
    </>
  );
};
