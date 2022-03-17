import "../../../scss/App.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const ProjectsCarousel = (props) => {
  const [slide, setSlide] = useState(props.projects[0]);

  return (
    <div>
      <Carousel
        onChange={(i) => setSlide(props.projects[i])}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {props.projects.map((project, i) => (
          <img key={project.title + i} src={project.img} alt={project.title} />
        ))}
      </Carousel>
      <h2>{slide.title}</h2>
      <p className="projects-project__desc">{slide.text}</p>
      <div className="actions">
        <Button variant="success">Github</Button>
        <Button href={slide.webLink} variant="success">
          Live
        </Button>
      </div>
    </div>
  );
};
