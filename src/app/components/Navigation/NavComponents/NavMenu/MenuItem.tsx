import { motion } from "motion/react";
import { JSX } from "react";
import styles from "./navMenu.module.css";

interface MenuItemProps {
  i: {
    title: string;
    icon: JSX.Element;
    href?: string; // added href
  };
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ i }: MenuItemProps) => {
  return (
    <motion.li
      className={styles.listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={i.href ?? "#"} className={styles.menuLink}>
        <div className={styles.iconPlaceholder}>{i.icon}</div>
        <div className={styles.textPlaceholder}>{i.title}</div>
      </a>
    </motion.li>
  );
};

export default MenuItem;
