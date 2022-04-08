import "../../scss/App.scss";
import amit from "../../img/ameat-screen.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProjectsCarousel } from "./Projects-Carousel";

const Projects = () => {
  const projects = [
    {
      img: amit,
      title: "Substitutes",
      text: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`,
      link: "https://substitutes.vercel.app",
    },
    {
      img: amit,
      title: "Super Compare",
      text: (
        <p>
          This is a comparison site that compares three well-known markets{" "}
          <br />
          I created a scraper to get all the latest prices from each market so
          the prices will always be up to date <br />
          Thanks to that I give you the ability to choose the cheapest market
          according to what you are interested in purchasing <br />
          The comparison takes into account the discounts that the markets offer
        </p>
      ),
      link: "https://super-compare.vercel.app",
    },
    {
      img: amit,
      title: "Ameat",
      text: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`,
      link: "https://ameat-client.vercel.app",
    },
    {
      img: amit,
      title: "Sudoku",
      text: (
        <p>
          This is a sudoku game which I created his client side with partner.
          <br /> I added a server side so users can sign up and try to get into
          the top ten results
        </p>
      ),
      link: "https://amit-sudoku.vercel.app",
    },

    {
      img: amit,
      title: "Filter-CV",
      text: (
        <p>
          This is a tool for recruiters which reads the resumes of candidates
          and filters them according to the selected keywords. After filtering,
          the filtered resumes will be sent to the recruiter by email
        </p>
      ),
      link: "https://filter-cv.vercel.app",
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
