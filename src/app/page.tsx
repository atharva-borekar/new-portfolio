"use client";

import ExperienceTimeline from "components/Information/Experience";
import IntroductionSection from "components/Information/IntroductionSection";
import dynamic from "next/dynamic";
import styles from "page.module.css";
import { useRef } from "react";

const Projects = dynamic(() => import("components/Information/Projects"), {
  ssr: false,
});
export default function Home() {
  const containerRef = useRef(null);

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
