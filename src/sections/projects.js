/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/projects.module.css";
const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsTitle}>
        Lo <span>mio</span>
      </h2>
      <ul className={styles.projectsList}>
        <li>
          <img
            src="/assets/images/stream-fighters.webp"
            alt="stream fighters"
            width={156}
          />
        </li>
        <li>
          <img
            src="/assets/images/west-santos-fc.png"
            alt="westcol"
            width={156}
          />
        </li>
      </ul>
    </section>
  );
};

export default Projects;
