import "../../scss/App.scss";
import ameat from "../../img/ameat-screen.png";
import substitutes from "../../img/substitutes.png";
import superCompare from "../../img/super-compare.png";
import sudoku from "../../img/sudoku.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProjectsCarousel } from "./Projects-Carousel";

const Projects = () => {
  const projects = [
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
      img: superCompare,
      title: "Super Compare",
      text: (
        <p>
          This is a comparison site that compares three well-known markets.
          <br />
          I created a scraper to get all the latest prices from each market so
          the prices will always be up to date. <br />
          Thanks to that I give you the ability to choose the cheapest market
          according to what you are interested in purchasing. <br />
          The comparison takes into account the discounts that the markets
          offer.
        </p>
      ),
      link: "https://super-compare.vercel.app",
    },
    {
      img: ameat,
      title: "Ameat",
      text: (
        <p>
          This is a demo resturant.
          <br />
          In this restaurant you can order from a variety of meats. <br />
          Customers can join the members club and enjoy a free burger on their
          birthday. <br /> Club members also earn points on every order and can
          use them for discounts. <br />
          The order confirmation will be sent via email. <br /> There is an
          option to contact the restaurant through the website if necessary.
        </p>
      ),
      link: "https://ameat-client.vercel.app",
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
