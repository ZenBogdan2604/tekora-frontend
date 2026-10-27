import { useEffect, useState } from 'react'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  image: string
  title: string
  rating?: number
  reviews?: number
  price: number
  category: string
  onAddToCart?: () => void
}

export const ProductCard = ({
  image,
  title,
  rating = 4.9,
  reviews = 0,
  price,
  category,
  onAddToCart,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [notification, setNotification] = useState('')

  const onFavoriteClick = () => {
    const nextFavorite = !isFavorite

    setIsFavorite(nextFavorite)

    setNotification(
      nextFavorite ? 'Товар добавлен в избранное' : 'Товар убран из избранного',
    )
  }

  useEffect(() => {
    if (!notification) return

    const timer = setTimeout(() => {
      setNotification('')
    }, 2500)

    return () => clearTimeout(timer)
  }, [notification])


  return (
    <>
      <article className={styles.productCard}>
        <div className={styles.productCard__item}>
          <img src={image} alt={title} />

          <button
            type="button"
            className={styles.productCard__heart}
            onClick={onFavoriteClick}
            aria-pressed={isFavorite}
          >
            {isFavorite ? '♥' : '♡'}
          </button>
        </div>

        <div className={styles.productCard__info}>
          <span className={styles.productCard__info_category}>
            {category}
          </span>

          <h3 className={styles.productCard__info_title}>
            {title}
          </h3>

          <div className={styles.productCard__info_rating}>
            <span className={styles.productCard__info_rating_stars}>
              ★★★★★
            </span>
            <span>
              {rating}({reviews})
            </span>
          </div>

          <div className={styles.productCard__info_bottom}>
            <strong>${price}</strong>

            <button
              type="button"
              className={styles.productCard__info_bottom_addCart}
              onClick={onAddToCart}
              aria-label={`Добавить ${title} в корзину`}
            >
              +
            </button>
          </div>
        </div>
      </article>
      {notification && (
        <div className={styles.productCard__notification} role='status'>
          {notification}
        </div>
      )}
    </>

  )
}
