import React from "react";
import styles from "../styles/Footer.module.css";
import utilStyles from "../styles/utils.module.css";

import { BRAND_NAME } from "../constants";
const Footer = () => {
  return (
    <footer className={`${styles.footer} ${utilStyles.borderColor}`}>
      Powered by{" "}
      <span className={`${styles.logo} ${utilStyles.brandName}`}>
        {BRAND_NAME}
      </span>
    </footer>
  );
};

export default Footer;
