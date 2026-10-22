import phoneOne from '@/shared/images/phoneOne.jfif'
import phoneTwo from '@/shared/images/phoneTwo.jpg'
import { useState } from 'react'
import styles from './HomePage.module.scss'

const slides = [phoneOne, phoneTwo]


export const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const showPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  const showNext = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    )
  }


  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
        <span className={styles.hero__eyebrow}>NEW SEASON / 2026</span>
        <h1 className={styles.hero__title}>Latest<br /><span className={styles.hero__subTitle}>Smartphones.</span></h1>
        <p>Meet the next generation of technology. Thoughtful<br /> design. Extraordinary performance.
        </p>
        <a className={styles.hero__link} href="">Explore collection
          <span aria-hidden="true">↗</span>
        </a>
        <div className={styles.hero__indicator}>
          <button type='button' onClick={showPrevious}>←</button>
          <span>{String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          <button type='button' onClick={showNext}>→</button>
        </div>
        </div>
        <div className={styles.hero__media}>
          <img src={slides[activeSlide]} alt="Смартфон из новой коллекции" />
        </div>
        <div className={styles.hero__bottomContainer}>
          <span>DESIGNED FOR WHAT'S NEXT</span>
          <span>SCROLL TO EXPLORE ↓
          </span>
        </div>
      </div>
    </section>
  )
}
