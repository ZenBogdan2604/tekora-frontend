import cartIcon from '@/shared/icons/cart.svg'
import searchIcon from '@/shared/icons/search.svg'
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.header__logo}>
        <span className={styles.header__logo_icon}>✳</span>
        <a className={styles.header__logo_name} href="">TEKORA.</a>
      </nav>
      <nav className={styles.header__main}>
        <a className={styles.header__active} href="">Home</a>
        <a href="">Shop</a>
        <a href="">Categories</a>
        <a href="">About</a>
      </nav>
      <form action="" className={styles.header__input}>
        <img className={styles.header__input_icon} src={searchIcon} alt="Поиск" />
        <input
          className={styles.header__input_search}
          type="search"
          placeholder='Search'
          aria-label='Поиск' />
      </form>
      <nav className={styles.header__actions}>
        <button className={styles.header__actions_cart}>
          <span className={styles.header__actions_cart_count}>0</span>
          <img className={styles.header__actions_cart_icon} src={cartIcon} alt="" />
        </button>
        <button className={styles.header__actions_login}>Sign in</button>
      </nav>
    </div>
  )
}
