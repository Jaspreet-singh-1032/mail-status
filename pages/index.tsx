import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import { BRAND_NAME } from "../constants";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{BRAND_NAME}</h1>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <b>{BRAND_NAME}</b>
        </span>
      </footer>
    </div>
  );
};

export default Home;
