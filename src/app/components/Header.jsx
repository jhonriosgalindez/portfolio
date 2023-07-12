'use client'

import { React, useState } from "react";
import Link from "next/link"

import ButtonMenu from "./ButtonMenu";

import styles from '../styles/Header.module.css'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  // let buttons = document.querySelectorAll('a');
  // buttons.forEach((button) => {
  //   button.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     let target = e.currentTarget.getAttribute('href');
      
  //     document.querySelector(target).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} href="/"></Link>
        <nav className={`${styles.navbar} ${openMenu ? `${styles.active}` : ''}`}>
          <ul className={styles.items}>
            <li><Link className={styles.link} onClick={handleMenu} href='#home'>Home</Link></li>
            <li><Link className={styles.link} onClick={handleMenu} href='#about'>About</Link></li>
            <li><Link className={styles.link} onClick={handleMenu} href='#stack'>Stack</Link></li>
            <li><Link className={styles.link} onClick={handleMenu} href='#projects'>Projects</Link></li>
            <li><Link className={styles.link} onClick={handleMenu} href='#contact'>Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.hamburguer}>
          <ButtonMenu  openMenu={openMenu} handleMenu={handleMenu}/>
        </div>
      </div>
    </header>
  )
}