import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import '../App.css';

const NavbarContainer = () => (
  <nav className={styles.navbar}>
    <Link className={styles.header} to="/">
      Math Magician
    </Link>
    <ul className={styles.pages}>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Calculator" className={styles.bordered}>
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/Quotes">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default NavbarContainer;
