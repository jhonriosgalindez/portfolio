
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}><span>| </span>About me</h2>
        <p className={styles.paragraph}>Hello, I am a self-taught Front End Developer with the ability to create software for web environments, my stack are focused on Front End technologies, however, I am still working on acquiring and putting into practice new knowledge about Back End, with the purpose of being a FullStack Developer, in this way, increase my value as a professional and be able to contribute much more to the work teams of which I am a part.</p>
        <div className={styles.infoMe}>
          <h3 className={styles.infoMeTitle}>My hobbies</h3>
          <ul className={styles.infoMeUl}>
            <li>Read and update myself in technology, astronomy and finance.</li>
            <li>Soccer, science fiction movies and video games.</li>
          </ul>
          <h3 className={styles.infoMeTitle}>My motivations</h3>
          <ul className={styles.infoMeUl}>
            <li>grow as a professional.</li>
            <li>Be part of the team of a high-value startup.</li>
            <li>Achieve a better quality of life.</li>
          </ul>
          <h3 className={styles.infoMeTitle}>My abilities</h3>
          <ul className={styles.infoMeUl}>
            <li>Responsive design.</li>
            <li>Mobile First.</li>
            <li>API's consumption.</li>
            <li>SEO practices.</li>
            <li>Debbuging.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}