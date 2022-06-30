import React from "react";
import styles from "../styles/Navbar.module.css";
import utilStyles from "../styles/utils.module.css";

import { BRAND_NAME } from "../constants";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={utilStyles.brandName}> {BRAND_NAME} </li>
      </ul>
      <div>My Profile</div>
    </div>
  );
};

export default Navbar;
