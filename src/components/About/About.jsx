import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
  <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt='About Image' className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='cursor Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Frontend developer with expereince in building responsive and user centric sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt='server Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Technology Analyst</h3>
                    <p>Analyst with expereince in designing efficient technology systems that meet business and technology needs</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt='ui Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>Have designed multiple landing pages</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  )
}
