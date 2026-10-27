import phoneOne from '@/shared/images/phoneOne.jfif'
import phoneTwo from '@/shared/images/phoneTwo.jpg'
import { ProductCard } from '@entities/product'
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
  const products = [
    {
      id: 1,
      category: "Headphones",
      title: "Wireless Headphones",
      image: "/images/headphones.png",
      rating: 4.9,
      reviews: 120,
      price: 999,
    },
    {
      id: 2,
      category: "Watch",
      title: "Smart Watch",
      image: "/images/watch.png",
      rating: 4.7,
      reviews: 85,
      price: 299,
    },
    {
      id: 3,
      category: "Mouse",
      title: "Gaming Mouse",
      image: "/images/mouse.png",
      rating: 4.8,
      reviews: 64,
      price: 79,
    },
    {
      id: 4,
      category: "Keyboard",
      title: "Mechanical Keyboard",
      image: "/images/keyboard.png",
      rating: 4.6,
      reviews: 92,
      price: 149,
    },
  ]


  return (
    <>
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
      <section className={styles.products}>
        <div className={styles.products__container}>
          <div className={styles.products__topSection}>
            <span className={styles.products__topSection_overline}>THE FAVORITES</span>
            <h1 className={styles.products__topSection_title}>Top Products.</h1>
            <div className={styles.products__topSection_block}>
              <span className={styles.products__topSection_underline}>Exceptional picks, loved by everyone.</span>
              <a className={styles.products__topSection_link} href="">View all products
                <span className={styles.products__topSection_link_icon}>↗</span>
              </a>
            </div>
          </div>
          <div className={styles.products__bottom_section}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                category={product.category}
                title={product.title}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
