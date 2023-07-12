import Image from 'next/image'
import styles from '../styles/Introduce.module.css'

import slider from '../assets/images/slider.png'

export default function Introduce() {
  return (
    <section id="home" className={styles.introduce}>
      <div className={styles.container}>
        <div className={styles.article}>
          <h1 className={styles.name}>Jhon Rios</h1>
          <h2 className={styles.title}>Front End Developer</h2>
          <p className={styles.text}>Hi there, I'm a software developer to websites and webapps. My specialty is client side development.</p>
          <a href="../../../pdf/cv-jhon-rios.pdf" className={styles.download} download>Download CV</a>
        </div>
        <Image 
        className={styles.image}
          src={slider} 
          width={450}
          height={450}
          alt='image frontend developer'/>
      </div>
    </section>
  )
}