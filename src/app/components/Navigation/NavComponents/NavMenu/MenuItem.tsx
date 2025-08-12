import { motion } from "motion/react";
import { JSX } from "react";
import styles from "./navMenu.module.css";

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

const MenuItem = ({ i }: { i: { title: string; icon: JSX.Element } }) => {
  return (
    <motion.li
      className={styles.listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconPlaceholder}>{i.title}</div>
      <div className={styles.textPlaceholder}>{i.title}</div>
    </motion.li>
  );
};
export default MenuItem;
