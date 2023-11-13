import React from 'react'
import { ReactComponent as Logo} from '../../assets/icons/igStudioLogo.svg'
import styles from './Header.module.css'
const Header = ({children}) => {
  return (
      <div className={styles.wrapper} >
        <Logo className={styles.logo} />
        <div className={styles.menu}>
            <div className={styles.menu_item}>Home</div>
            <div className={styles.menu_item}>Attorneys</div>
            <div className={styles.menu_item}>Practice Areas</div>
            <div className={styles.menu_item}>About Us</div>
        </div>
        {children}
      </div>
  )
}

export default Header