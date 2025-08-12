"use client";

import useMousePosition from "hooks/useMousePosition";
import { motion } from "motion/react";
import { useState } from "react";
import "./maskedCursor.css";

const MaskedCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { mouseX, mouseY } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <motion.span
      className="mask"
      animate={{
        WebkitMaskPosition: `${mouseX - size / 2}px ${mouseY - size / 2}px`,
        WebkitMaskSize: `${size / 2}px`,
      }}
      transition={{ ease: "backOut", duration: 0.1 }}
    />
  );
};

export default MaskedCursor;
