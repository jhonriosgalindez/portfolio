import React from 'react'
import Image from 'next/image'

import Header from './components/Header'
import Introduce from './components/Introduce'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Introduce />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
    
    </>
  )
}
