"use client";

import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import styles from "./card.module.css";

const Card = ({
  id,
  setIsHovered,
  isHovered,
  project,
}: {
  id: number;
  setIsHovered?: Dispatch<SetStateAction<number>>;
  isHovered?: number;
  project: {
    name: string;
    description: string;
    link: string;
    techStack: string;
  };
}) => {
  return (
    <motion.div
      className={styles.group}
      onClick={() => setIsHovered(id === isHovered ? -1 : id)}
    >
      {/* Animated Background */}
      <motion.div
        className={styles.before}
        animate={
          isHovered == id
            ? { scale: 0.95, height: "18rem", borderRadius: "1rem" }
            : { scale: 1, height: "6rem" }
        }
        transition={{ duration: 0.1 }}
      />
      {/* Profile Picture */}
      <motion.div
        className={styles.profilePicture}
        animate={
          isHovered == id
            ? { scale: 1.5, x: -275, y: -100 }
            : { scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: 0.1 }}
      ></motion.div>
      {/* User Info */}
      <motion.div
        className={styles.userInfo}
        animate={isHovered == id ? { y: -150 } : { y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <span className={styles.name}>{project?.name}</span>
        <p>{project?.description}</p>
      </motion.div>
      {/* Follow Button */}
      <motion.a
        href={project?.link}
        className={styles.followButton}
        animate={
          isHovered == id
            ? { scale: 1.25, backgroundColor: "#3b82f6" }
            : { scale: 1, backgroundColor: "#1d4ed8" }
        }
        transition={{ duration: 0.1 }}
      >
        Link
      </motion.a>
    </motion.div>
  );
};

export default Card;
