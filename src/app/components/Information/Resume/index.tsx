"use client";
import styles from "./resume.module.css";
const Resume = () => {
  return (
    <>
      <div
        style={{
          justifySelf: "center",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      >
        <h2>Resume</h2>
      </div>
      <div className={styles.resumeContainer}>
        <iframe
          src="https://drive.google.com/file/d/1KFW9Qylh0nILZdSWfYFzGJ2JPqTRy2ti/preview"
          width="100%"
          className={styles.resume}
          allow="autoplay"
          style={{}}
        />
      </div>
    </>
  );
};

export default Resume;
