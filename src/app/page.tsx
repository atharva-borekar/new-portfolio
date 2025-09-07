"use client";

import ExperienceTimeline from "components/Information/Experience";
import IntroductionSection from "components/Information/IntroductionSection";
import { animate, inView } from "motion";
import dynamic from "next/dynamic";
import styles from "page.module.css";
import { useEffect, useRef } from "react";

const Projects = dynamic(() => import("components/Information/Projects"), {
  ssr: false,
});
export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-section pre");

    elements.forEach((target) => {
      inView(target, ({ target }) => {
        animate(
          target,
          { opacity: 1, y: [100, 0] },
          {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
          }
        );

        return () => animate(target, { opacity: 0, y: 100 });
      });
    });
  }, []);
  return (
    <div className={styles.container} ref={containerRef}>
      <div className="example">
        <section id="intro" className="scroll-section">
          <IntroductionSection containerRef={containerRef} />
        </section>
        <section id="experience" className="experience">
          <ExperienceTimeline />
        </section>
        <section id="projects" className="projects">
          <Projects />
        </section>
      </div>

      <div
        style={{ height: 200, width: "100%", mixBlendMode: "difference" }}
      ></div>
    </div>
  );
}
