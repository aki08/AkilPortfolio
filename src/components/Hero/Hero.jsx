import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, Website Loading</h1>
        <p className={styles.description}>I am web developer looking out for oppurtunities</p>
        <a href='mailto:myemail@gmail.com' className={styles.contactBtn}>Contact me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt='hero image' className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}
