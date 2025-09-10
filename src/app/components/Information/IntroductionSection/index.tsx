// components/IntroductionSection.js
import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";
import styles from "./introductionSection.module.css";
// const src =
//   "https://e7.pngegg.com/pngimages/913/851/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text.png";

const Intro = () => {
  return (
    <section id="home">
      <div className={styles.introStart}>
        <h1>Hi, my name is</h1>

        <h2 className={`${styles.bigHeading} ${styles.name}`}>
          Atharva Borekar
        </h2>
        <h3 className="big-heading role color-warning">
          I build things for the web.
        </h3>
        <div className="mt-4">
          <button
            type="button"
            disabled
            className="mx-2 my-2 btn btn-outline-warning"
          >
            React.Js
          </button>
          <button
            type="button"
            disabled
            className="mx-2 my-2 btn btn-outline-warning"
          >
            JavaScript
          </button>
          <button
            type="button"
            disabled
            className="mx-2 my-2 btn btn-outline-warning"
          >
            TypeScript
          </button>
          <button
            type="button"
            disabled
            className="mx-2 my-2 btn btn-outline-warning"
          >
            HTML / CSS
          </button>
          <button
            type="button"
            disabled
            className="mx-2 my-2 btn btn-outline-warning"
          >
            Python
          </button>
          <button
            type="button"
            disabled
            className="mx-2 my-2 btn btn-outline-warning"
          >
            Flask
          </button>
        </div>
        <div className="intro-body text-wrap">
          An avid person who is always curious about the working of technology
          around him.
          <br />
          Technical skills:- JavaScript, TypeScript, ReactJS, Git, Redux, Redux
          Saga, React Query, React Testing Library.
          <br />
          Possess good communication skills and flexible to work in any
          environment as required.
        </div>
      </div>
    </section>
  );
};
const ScrollAnimation = ({
  containerRef,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerRef: RefObject<any>;
}) => {
  // Get the scroll progress
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });

  // Transform scroll progress into motion values for x and opacity
  const x = useTransform(scrollYProgress, [0, 1], [0, 1000]); // Move 0 to 500px
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.5, 0]); // Fade out
  const imageDim = useTransform(scrollYProgress, [0, 20, 100], [100, 150, 200]);
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        paddingTop: "4rem",
      }}
      className="w-100 pt-5 text-wrap flex-wrap"
    >
      {/* Left Child */}
      <div
        className="col-md-8 col-12 mb-4" // Stack vertically on small screens
        style={{ textAlign: "center" }}
      >
        <Intro />
      </div>

      {/* Right Child */}
      <motion.div
        style={{
          padding: "20px",
          opacity: opacity,
          x: x,
        }}
        className="col-md-4 col-12" // Adjust width on medium and small screens
      >
        <motion.img
          src="/assets/images/avatar.png"
          alt="profile_photo"
          style={{
            height: `${imageDim}%`,
            width: `${imageDim}%`,
            objectFit: "contain",
            borderRadius: "50%", // Make it circular
            margin: "0 auto", // Center on small screens
          }}
          className="img-fluid"
        />
      </motion.div>
    </section>
  );
};

export default ScrollAnimation;
