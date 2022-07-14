import React from "react";
import Link from 'next/link'
import styles from "../styles/Navbar.module.css";
import utilStyles from "../styles/utils.module.css";

import {useAuth} from '../context/AuthContext'
import { BRAND_NAME } from "../constants";

const Navbar = () => {
  const {user} = useAuth();
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={utilStyles.brandName}> <Link href="/">{BRAND_NAME}</Link> </li>
      </ul>
      <div>{user ? user.email: <Link href="/signin">SignIn</Link>}</div>
    </div>
  );
};

export default Navbar;
