import Image from 'next/image';
import styles from '../styles/Stack.module.css'

import iconHtml from '../assets/icons/icon-html5.svg';
import iconCss from '../assets/icons/icon-css3.svg';
import iconJS from '../assets/icons/icon-javascript.svg';
import iconWp from '../assets/icons/icon-webpack.svg';
import iconReact from '../assets/icons/icon-react.svg';
import iconGit from '../assets/icons/icon-git.svg';
import iconNextJS from '../assets/icons/icon-nextjs.svg';
import iconSass from '../assets/icons/icon-sass.svg';
import iconTailwindcss from '../assets/icons/icon-tailwindcss.svg';
import iconAstro from '../assets/icons/icon-astro.svg';

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.container}>
        <h2 className={styles.title}><span>| </span>Stack</h2>
        <div className={styles.subContainer}>
          <div className={styles.technologies}>
            <ul className={styles.technologiesList}>
              <Image src={iconHtml} width={75} height={75} alt="icon-html"></Image>
              <h3>HTML5</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image src={iconCss} width={75} height={75} alt="icon-css"></Image>
              <h3>CSS3</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image src={iconSass} width={75} height={75} alt="icon-sass"></Image>
              <h3>SCSS</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image src={iconTailwindcss} width={75} height={75} alt="icon-tailwindcss"></Image>
              <h3>TailwindCSS</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image src={iconJS} width={75} height={75} alt="icon-javascript"></Image>
              <h3>JavaScript</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image className={styles.iconWebpack} src={iconWp} width={75} height={75} alt="icon-webpack"></Image>
              <h3>Webpack</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image className={styles.iconOfReact} src={iconReact} width={75} height={75} alt="icon-react"></Image>
              <h3>React</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image src={iconNextJS} width={75} height={75} alt="icon-nextjs"></Image>
              <h3>Next.js</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image src={iconAstro} width={75} height={75} alt="icon-astro"></Image>
              <h3>Astro</h3>
            </ul>
            <ul className={styles.technologiesList}>
              <Image src={iconGit} width={75} height={75} alt="icon-git"></Image>
              <h3>Git</h3>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}