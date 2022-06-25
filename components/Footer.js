import Image from "next/image";
import styles from '../styles/Footer.module.css';

import Facebook from '../public/facebook.svg';
import Twitter from '../public/twitter.svg';
import Instagram from '../public/insta.svg';


const Footer = () => {
  return (
    <div className={styles.divMain}>
        <div className={styles.divSociales}>
          <h3>Redes Sociales</h3>
          <Image 
            src={Facebook}
            width={60}
            height={50}
          ></Image>
          <Image 
            src={Twitter}
            width={60}
            height={50}
          ></Image>
          <Image 
            src={Instagram}
            width={60}
            height={50}
          ></Image>
        </div>
        <div className={styles.contactanos}>
          <h3>Zapopan, Jalisco, Zona Norte</h3>
        </div>
      </div>
  )
}

export default Footer