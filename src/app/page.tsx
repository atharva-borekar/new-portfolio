"use client";

import IntroductionSection from "components/Information/IntroductionSection";
import Projects from "components/Information/Projects";
import { animate, inView } from "motion";
import styles from "page.module.css";
import { useEffect, useRef } from "react";
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
        <section className="scroll-section">
          <pre>
            <IntroductionSection containerRef={containerRef} />
          </pre>
        </section>
        <section className="scroll-section">
          <pre>
            <div
              style={{ height: 400, width: "100%", mixBlendMode: "difference" }}
            ></div>
          </pre>
        </section>
        <section className="scroll-section">
          {/* <pre>
            <div
              style={{
                mixBlendMode: "difference",
              }}
            > */}
          <Projects />
          {/* </div>
          </pre> */}
        </section>
        <section className="scroll-section">
          <pre>
            <div
              style={{
                height: 200,
                width: "100%",
                mixBlendMode: "difference",
                marginTop: "25em",
              }}
            ></div>
          </pre>
        </section>
      </div>

      <div
        style={{ height: 200, width: "100%", mixBlendMode: "difference" }}
      ></div>
    </div>
  );
}
