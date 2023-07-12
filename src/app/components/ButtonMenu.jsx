import React from "react";
import styles from '../styles/ButtonMenu.module.css';

export default function ButtonMenu({ openMenu, handleMenu }) {
  return (
    <div
      onClick={handleMenu}
      className={` ${styles.navIcon} ${openMenu ? `${styles.open}` : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}