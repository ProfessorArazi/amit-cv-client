import "../../scss/App.scss";
import amit from "../../img/leamit.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProjectsCarousel } from "../UI/Projects-Carousel/Projects-Carousel";

const Projects = () => {
  const projects = [
    {
      img: amit,
      title: "Card Title",
      text: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`,
      webLink: "https://ameat.herokuapp.com/",
    },
    {
      img: amit,
      title: "Card Title",
      text: `Some quick example text to build on the card title and make up`,
      webLink: "https://ameat.herokuapp.com/",
    },
    {
      img: amit,
      title: "Card Title",
      text: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`,
      webLink: "https://ameat.herokuapp.com/",
    },
    {
      img: amit,
      title: "Card Title",
      text: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`,
      webLink: "https://ameat.herokuapp.com/",
    },
  ];

  return (
    <>
      <h1 className="projects-title">PROJECTS</h1>

      <ProjectsCarousel projects={projects} />
    </>
  );
};
export default Projects;
