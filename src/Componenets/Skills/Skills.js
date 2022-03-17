import "../../scss/App.scss";
import { useEffect } from "react";
import { MotionList } from "../UI/Motion-List/MotionList";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const Frontend = ["HTML", "CSS", "SCSS", "JavaScript", "React", "Redux"];
  const Backend = ["NodeJS", "Express", "MongoDB"];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <h1 className="skills-title">MY SKILLS</h1>
      <h2 data-aos="fade" data-aos-once className="skills-title__front">
        FRONTEND
      </h2>
      <MotionList front={Frontend} />
      <h2 data-aos="fade" data-aos-once className="skills-title__back">
        BACKEND
      </h2>
      <MotionList back={Backend} />
    </>
  );
};
export default Skills;
