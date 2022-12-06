import React from 'react';
import styles from './Navbar.module.css';

const NavbarContainer = () => (
  <nav className={styles.navbar}>
    <a className={styles.header} href="/">Math Magician</a>
    <ul className={styles.pages}>
      <li href="/">Home</li>
      <li href="/Calculator" className={styles.bordered}>Calculator</li>
      <li href="/Quote">Quote</li>
    </ul>
  </nav>
);

export default NavbarContainer;
