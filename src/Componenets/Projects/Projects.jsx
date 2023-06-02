import "../../scss/App.scss";
import substitutes from "../../img/substitutes.png";
import superCompare from "../../img/super-compare.png";
import sudoku from "../../img/sudoku.png";
import interview from "../../img/interview.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProjectsCarousel } from "./Projects-Carousel";

const Projects = () => {
  const projects = [
    {
      img: interview,
      title: "Interview",
      text: (
        <p>
          My interview simulation website offers a unique experience for
          refining your interview skills.
          <br /> Utilizing a camera integration, you can simulate Zoom
          interviews and perfect your on-camera presence.
          <br /> Engage with a vibrant community of users, where you can access
          <br />
          community-generated questions and customize them to suit your needs.
          <br />
          Additionally, you have the option to contribute your own questions,
          fostering a collaborative learning environment.
          <br /> Prepare with confidence, enhance your skills, and excel in your
          next interview.
        </p>
      ),
      link: "https://interview-amit.vercel.app",
    },
    {
      img: superCompare,
      title: "Super Compare",
      text: (
        <p>
          Discover the best deals with our comprehensive comparison site that
          analyzes three leading markets.
          <br /> Our platform utilizes a sophisticated scraper to fetch
          real-time prices from each market, ensuring that <br /> you always
          have up-to-date information at your fingertips.
          <br /> With our user-friendly interface, you can easily select
          your desired  <br /> product and find the cheapest market tailored to your
          preferences.
          <br /> Our comparison takes into account the discounts  offered
          by each <br /> market, enabling you to make informed purchasing decisions.
          <br /> Experience the convenience of finding the best deals
          effortlessly and save money on
          <br />
          your purchases through our cutting-edge comparison site.
        </p>
      ),
      link: "https://super-compare.vercel.app",
    },
    {
      img: substitutes,
      title: "Substitutes",
      text: (
        <p>
          This is a site that connects schools with substitute teachers. <br />{" "}
          This site provides a solution in cases where teachers are absent from
          school. <br /> You can signup as a school or as a substitute teacher.{" "}
          <br />A school can offer jobs and select teachers from the list of
          appliers. <br />A teacher can offer himself to a school and after
          hiring him the school will rate him at the end of the work.
          <br />
          Other schools get to see the average rate of the teacher and decide
          whether to hire him as well. <br /> Teachers can filter works
          according to what they are looking for. <br />
          Users will get notifications with every update, They will be able to
          join a mailing list for receiving notifications via mail. <br />{" "}
          Teachers will receive daily updates about new jobs in their city
        </p>
      ),
      link: "https://substitutes.vercel.app",
    },
    {
      img: sudoku,
      title: "Sudoku",
      text: (
        <p>
          This is a sudoku game which I created his client side with a partner.
          <br /> I added a server side so users can sign up and try to get into
          the top ten results.
        </p>
      ),
      link: "https://amit-sudoku.vercel.app",
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
