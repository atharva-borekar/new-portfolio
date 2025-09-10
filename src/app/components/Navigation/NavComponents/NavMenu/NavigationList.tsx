import { MenuItem } from "components/Navigation/NavComponents";
import { motion } from "motion/react";
import { ImProfile } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { IoFileTrayStacked } from "react-icons/io5";

import { IoHome } from "react-icons/io5";

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
      icon: <IoHome size={30} color="#ff9800" style={{ marginRight: 8 }} />,
    },
    {
      title: "Experience",
      href: "#experience",
      icon: <ImProfile size={30} color="#ff9800" style={{ marginRight: 8 }} />,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: (
        <IoFileTrayStacked
          size={30}
          color="#ff9800"
          style={{ marginRight: 8 }}
        />
      ),
    },
    {
      title: "Contact",
      href: "#contact",
      icon: (
        <IoMdContact size={30} color="#ff9800" style={{ marginRight: 8 }} />
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
