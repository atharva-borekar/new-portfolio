"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import styles from "./card.module.css";

interface Project {
  name: string;
  description: string;
  link: string;
  techStack: string;
}

interface CardProps {
  id: number;
  setIsHovered?: Dispatch<SetStateAction<number>>;
  isHovered?: number;
  project: Project;
}

const Card = ({ id, setIsHovered, isHovered, project }: CardProps) => {
  const isActive = isHovered === id;

  return (
    <motion.div className={styles.group}>
      <motion.div
        className={styles.before}
        animate={
          isActive
            ? { scale: 0.95, height: "80%", borderRadius: "1rem" }
            : { scale: 1, height: "25%" }
        }
        transition={{ duration: 0.1 }}
      />

      <motion.div
        className={styles.projectPicture}
        animate={
          isActive ? { scale: 1.5, x: -275, y: -100 } : { scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: 0.1 }}
      />

      <motion.div
        className={styles.projectInfo}
        animate={isActive ? { y: "-90%" } : { y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <span className={styles.name}>{project?.name}</span>
        {isActive ? <p>{project?.description}</p> : <></>}
      </motion.div>

      <motion.a
        href={project?.link}
        className={styles.projectLink}
        animate={
          isActive
            ? { scale: 1.25, backgroundColor: "#ff9800" }
            : { scale: 1, backgroundColor: "#ff9800" }
        }
        transition={{ duration: 0.1 }}
      >
        Link
      </motion.a>
    </motion.div>
  );
};

export default Card;
