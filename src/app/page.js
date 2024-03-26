import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Sponsors from "@/sections/sponsors";
import WMerch from "@/sections/w-merch";
import styles from "./page.module.css";
import ButtonMusic from "@/components/button-music";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Sponsors />
      <Projects />
      <WMerch />
      <ButtonMusic />
    </main>
  );
}
