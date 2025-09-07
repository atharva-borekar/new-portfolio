"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import styles from "./stickyNav.module.css";

const StickyNav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? styles.hidden : styles.visible}
      whileHover={styles.visible}
      onFocusCapture={() => setIsHidden(false)}
      transition={{ duration: 0.2 }}
      className={`${styles.stickyNav} ${styles.transition}`}
    >
      <nav className={styles.nav}>
        <motion.a
          href="#"
          className={styles.navItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>
          <span className={styles.homeButton}>Home</span>
        </motion.a>
        <motion.a
          // href="#projects"
          className={styles.navItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </motion.a>
        <motion.a
          href="#"
          className={styles.navItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.a>
        <motion.a
          href="#"
          className={styles.navItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.a>
        <motion.a
          href="#"
          className={styles.navItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default StickyNav;
