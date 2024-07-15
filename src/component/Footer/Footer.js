import CreatedBy from "./CreatedBy";
import Weather from "./Weather";
import styles from '../../css/Footer/Footer.module.css'

const Footer = () => {

  return( 
  <footer className={styles['footer']}>
    <CreatedBy/>
    <Weather/>
    {/* someday... <ThemeToggleBtn/> */}
  </footer>
  )
};

export default Footer;
