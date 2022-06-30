import React from "react";
import styles from "../styles/AppLayout.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const AppLayout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <header>
        <Navbar />
      </header>
      <main className={styles.container}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
