"use client";

import Card from "components/CustomComponents/Card";

import profileData from "constants/portfolioData";
import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";
const Projects = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [isHovered, setIsHovered] = useState(-1);
  const speed = 0.05;
  const cardWidth = 200;
  const gap = 10;
  const projects = profileData.projects.map((project, i) => (
    <Card
      key={i}
      id={i}
      project={project}
      setIsHovered={setIsHovered}
      isHovered={isHovered}
    />
  ));
  const totalWidth = projects?.length * (cardWidth + gap);

  useAnimationFrame((_, delta) => {
    if (isHovered === -1) {
      setOffsetX((prev) => prev - delta * speed);
    }
  });

  const translateX = offsetX % totalWidth;

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        style={{
          display: "flex",
          gap: `${gap}px`,
          transform: `translateX(${translateX}px)`,
        }}
      >
        {[...projects, ...projects].map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
