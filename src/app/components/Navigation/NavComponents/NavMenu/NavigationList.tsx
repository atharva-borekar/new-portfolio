import { MenuItem } from "components/Navigation/NavComponents";
import { motion } from "motion/react";
import styles from "./navMenu.module.css";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavigationList = () => {
  const navItems = [
    {
      title: "Home",
      href: "#intro",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#CFCFCF" />
        </svg>
      ),
    },
    {
      title: "Experience",
      href: "#experience",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#CFCFCF" />
        </svg>
      ),
    },
    {
      title: "Projects",
      href: "#projects",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#CFCFCF" />
        </svg>
      ),
    },
    {
      title: "Contact",
      href: "#contact",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#CFCFCF" />
        </svg>
      ),
    },
  ];

  return (
    <motion.ul className={styles.list} variants={navVariants}>
      {navItems.map((item) => (
        <MenuItem i={item} key={item.title} />
      ))}
    </motion.ul>
  );
};

export default NavigationList;
