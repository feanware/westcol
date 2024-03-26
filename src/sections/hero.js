import React from "react";
import WLogo from "@/components/w-logo";
import Instagram from "@/components/instagram";
import Youtube from "@/components/youtube";
import Twitter from "@/components/twitter";
import Tiktok from "@/components/tiktok";
import Kick from "@/components/kick";
import styles from "@/styles/hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <WLogo />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span>Westcol</span> <br />
          Steamer Numero <span>Uno</span> En <span>Latinoamérica</span>
        </h1>
        <nav className={styles.social}>
          <ul className={styles.socialList}>
            <li>
              <a href="https://www.instagram.com/westcol" target="_blank">
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCEg_iK8FKwZfpRMn4-AnnnQ"
                target="_blank"
              >
                <Youtube />
              </a>
            </li>
            <lil>
              <a href="https://kick.com/westcol" target="_blank">
                <Kick />
              </a>
            </lil>
            <li>
              <a href="https://twitter.com/WestCOL_" target="_blank">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@twitchwestcol?lang=es"
                target="_blank"
              >
                <Tiktok />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
