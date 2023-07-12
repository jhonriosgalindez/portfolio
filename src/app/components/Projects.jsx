import Image from 'next/image';
import styles from '../styles/Projects.module.css'

import iconGithub from '../assets/icons/icon-github.svg';
import iconNetlify from '../assets/icons/icon-netlify.svg';
import iconVercel from '../assets/icons/icon-vercel.svg';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}><span>| </span>Projects</h2>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Portfolio</h3>
          <article className={`${styles.cardItem} ${styles.cardItem1}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML, CSS, JavaScript and Webpack. FRAMEWAORK AND LIBRARIES: ReactJS, NextJS. CONCEPTS: React Hooks, events, components, webpack configuration and Responsive Design.</p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} href='' target='_blank'>
              <Image src={iconGithub} width={30} height={30} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} href='' target='_blank'>
              <span className={styles.cardTextLink}>Vercel</span>
              <Image src={iconVercel} width={30} height={30} alt="icon-vercel"/>
            </a>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Azami Restaurant</h3>
          <article className={`${styles.cardItem} ${styles.cardItem2}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML and CSS. PREPROCESSOR: SASS. CONCEPTS: BEM Methodology, Mixins, Variables, Functions and Responsive Design.</p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} width={30} height={30} href="https://github.com/jhonriosgalindez/azami-restaurant" target='_blank'>
              <Image src={iconGithub} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} href="https://jhon-rios-azami-restaurant.netlify.app/" target='_blank'>
              <span className={styles.cardTextLink}>Netlify</span>
              <Image src={iconNetlify} width={30} height={30} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Green Fruit Store</h3>
          <article className={`${styles.cardItem} ${styles.cardItem3}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML, CSS, JavaScript and Webpack. FRAMEWORK AND LIBRARIES: ReactJS, NextJS. CONCEPTS: React Hooks, events, components, API consumption, image optimization, nextjs configuration and Responsive Design.</p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} width={30} height={30} href="https://github.com/jhonriosgalindez/green-fruit-store" target='_blank'>
              <Image src={iconGithub} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} width={30} height={30} href="https://green-fruit-store.vercel.app/" target='_blank'>
              <span className={styles.cardTextLink}>Vercel</span>
              <Image src={iconVercel} alt="icon-vercel"/>
            </a>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Nasa Blog</h3>
          <article className={`${styles.cardItem} ${styles.cardItem4}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML, CSS, JavaScript and Webpack. FRAMEWORKS AND LIBRARIES: ReactJS. CONCEPTS: React Hooks, events, components, consumption of API's, configuration and optimization of Webpack and Responsive Design.</p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} width={30} height={30} href="https://github.com/jhonriosgalindez/space-blog" target='_blank'>
              <Image src={iconGithub} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} href="https://jhonrios-space-blog.netlify.app/" target='_blank'>
              <span className={styles.cardTextLink}>Netlify</span>
              <Image src={iconNetlify} width={30} height={30} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Adventure on Wheels</h3>
          <article className={`${styles.cardItem} ${styles.cardItem5}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML, CSS y JavaScript. CONCEPTS: Responsive Design.</p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} href="https://github.com/jhonriosgalindez/adventure-on-wheels" target='_blank'>
              <Image src={iconGithub} width={30} height={30} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} href="https://jhonrios-adventure-on-wheels.netlify.app/" target='_blank'>
              <span className={styles.cardTextLink}>Netlify</span>
              <Image src={iconNetlify} width={30} height={30} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Animal's API</h3>
          <article className={`${styles.cardItem} ${styles.cardItem6}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML, CSS and JavaScript. CONCEPTS: consumption of API's, information rendering, DOM management and Responsive Design. </p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} href="https://github.com/jhonriosgalindez/random-foxes-app" target='_blank'>
              <Image src={iconGithub} width={30} height={30} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} href="https://foxes-random-app.netlify.app/" target='_blank'>
              <span className={styles.cardTextLink}>Netlify</span>
              <Image src={iconNetlify} width={30} height={30} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>To-Do panel</h3>
          <article className={`${styles.cardItem} ${styles.cardItem7}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML, CSS and JavaScript. FRAMEWORKS AND LIBRARIES: ReactJS. CONCEPTS: React Hooks, events, components, component composition, modals, data persistence and Responsive Design.</p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} href="https://github.com/jhonriosgalindez/academy-todos-panel" target='_blank'>
              <Image src={iconGithub} width={30} height={30} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} href="https://todo-panel.netlify.app" target='_blank'>
              <span className={styles.cardTextLink}>Netlify</span>
              <Image src={iconNetlify} width={30} height={30} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Clima App</h3>
          <article className={`${styles.cardItem} ${styles.cardItem8}`}>
            <p className={styles.cardParagraph}>TECHNOLOGIES: HTML, CSS, JavaScript and Webpack. CONCEPTS: Events, consumption of API's, information rendering, DOM management and Responsive Design.</p>
          </article>
          <ul className={styles.cardList}>
            <a className={styles.cardLink} href="https://github.com/jhonriosgalindez/clima-app" target='_blank'>
              <Image src={iconGithub} width={30} height={30} alt="icon-github"/>
              <span className={styles.cardTextLink}>Repository</span>
            </a>
            <a className={styles.cardLink} href="https://jhonrios-clima-app.netlify.app/" target='_blank'>
              <span className={styles.cardTextLink}>Netlify</span>
              <Image src={iconNetlify} width={30} height={30} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
      </div>
    </section>
  )
}