"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

const Card = ({ id, isHovered, project }: CardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // treat <768px as mobile
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = isMobile ? true : isHovered === id;
  const bgImage = `/assets/images/bg_${id + 1}.png`;

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
        style={{ backgroundImage: `url(${bgImage})` }}
        animate={
          isActive ? { scale: 1.5, x: -275, y: -100 } : { scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: 0.2 }}
      />

      {/* Project info at the top */}
      <motion.div
        className={styles.projectInfo}
        animate={isActive ? { opacity: 1 } : { opacity: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <span className={styles.name}>{project?.name}</span>
        {isActive && (
          <>
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0, marginTop: 24 }}
              transition={{ duration: 0.3 }}
            >
              {project?.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project?.techStack}
            </motion.p>
          </>
        )}
      </motion.div>

      <motion.a
        target="_blank"
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
