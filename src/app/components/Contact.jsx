import Image from 'next/image';

import styles from '../styles/Contact.module.css'

import iconGithub from '../assets/icons/icon-github.svg';
import iconLinkedin from '../assets/icons/icon-linkedin-square.svg';
import iconEmail from '../assets/icons/icon-email.svg';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}><span>| </span>Contact</h2>
        <div className={styles.links}>
          <p className={styles.linksText}>!Let's talk!</p>
          <div className={styles.linksSocialmedia}>
            <a className={`${styles.socialmediaItem} ${styles.socialGithub}`} href="https://github.com/jhonriosgalindez" target="_blank"><Image src={iconGithub} width={65} height={65} alt="icon-github"/></a>
            <a className={`${styles.socialmediaItem} ${styles.socialLinkedin}`} href="https://www.linkedin.com/in/jhon-rios-galindez/" target="_blank"><Image src={iconLinkedin} width={65} height={65} alt="icon-linkedin"/></a>
            <a className={`${styles.socialmediaItem} ${styles.socialEmail}`} href="mailto:r.jhonf@gmail.com"><Image src={iconEmail} width={65} height={65} alt="icon-email"/></a>
          </div>
        </div>
      </div>    
    </section>
  )
}