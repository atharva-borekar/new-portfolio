"use client";

import Card from "components/CustomComponents/Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./projects.module.css";

const MarqueeItem = ({ items, from, to, isHovered }) => {
  return (
    <div className={styles.marqueeContainer}>
      <motion.div
        initial={{ x: `${from}` }}
        animate={{
          x: isHovered ? 0 : `${to}`, // When hovered, stop the movement
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className={styles.marqueeContent}
      >
        {items.map((item, index) => (
          <div key={index} className="card">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Reorder the array when the first card scrolls out of view
  useEffect(() => {
    if (!isHovered) {
      controls.start("scroll");
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);
  const upperMarquee = [
    <Card key={1} isHovered={isHovered} setIsHovered={setIsHovered} />,
    <Card key={2} isHovered={isHovered} setIsHovered={setIsHovered} />,
    <Card key={3} isHovered={isHovered} setIsHovered={setIsHovered} />,
    <Card key={4} isHovered={isHovered} setIsHovered={setIsHovered} />,
    <Card key={5} isHovered={isHovered} setIsHovered={setIsHovered} />,
    <Card key={6} isHovered={isHovered} setIsHovered={setIsHovered} />,
    <Card key={7} isHovered={isHovered} setIsHovered={setIsHovered} />,
    <Card key={8} isHovered={isHovered} setIsHovered={setIsHovered} />,
  ];

  return (
    <div className={styles.marqueeWrapper}>
      <MarqueeItem
        items={upperMarquee}
        from={0}
        to={"-100%"}
        isHovered={isHovered}
      />
    </div>
  );
};

export default Projects;
