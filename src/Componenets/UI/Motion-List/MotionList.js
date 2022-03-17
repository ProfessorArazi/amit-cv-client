import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectItem } from "../../Projects/ProjectItem";

export const MotionList = (props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: props.back ? 1.5 : 0.4,
        staggerChildren: props.projects ? 0.4 : 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);

  const items = props.front || props.back || props.familiar;

  useEffect(() => {
    if (inView && count === 0) {
      controls.start("visible");
      setCount(1);
    }
  }, [controls, inView, count]);

  return (
    <motion.ul
      ref={ref}
      className={props.projects ? "projects" : props.front ? "front" : "back"}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {props.projects
        ? props.projects.map((project, i) => (
            <motion.li key={i} variants={item}>
              {
                <ProjectItem
                  img={project.img}
                  title={project.title}
                  text={project.text}
                />
              }
            </motion.li>
          ))
        : items.map((skill, i) => (
            <motion.li className="skill" key={i} variants={item}>
              {skill}
            </motion.li>
          ))}
    </motion.ul>
  );
};
