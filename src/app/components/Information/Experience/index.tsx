"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./experience.module.css";

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    year: "08/2023 – 06/2025",
    role: "Software Developer",
    company: "Idox PLC",
    description:
      "Migrated GIS platform from JavaScript to TypeScript, built reusable React components, developed APIs in Ruby on Rails/Node.js, and improved Mapbox GL performance.",
  },
  {
    year: "09/2021 – 07/2023",
    role: "Software Engineer",
    company: "Josh Software Pvt. Ltd.",
    description:
      "Developed full-stack solutions using React.js and Django, migrated legacy AngularJS system to React, created dashboards with interactive visualizations, and mentored junior developers.",
  },
  {
    year: "01/2021 – 07/2021",
    role: "Software Engineer Intern",
    company: "Josh Software Pvt. Ltd.",
    description:
      "Trained in React.js, collaborated with senior developers, and contributed to brainstorming sessions for new feature development.",
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className={styles.section}>
      {/* Sticky Heading at Top */}

      <div className={styles.sticky}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.heading}
        >
          <h2>Experience</h2>
        </motion.div>
        <motion.div className={styles.timelineWrapper}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.timelineCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className={styles.year}>{exp.year}</span>
              <h5>{exp.role}</h5>
              <h6>{exp.company}</h6>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
