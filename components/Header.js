import Image from "next/image";
import Logo from '../public/logo.jpg';
import styles from '../styles/Header.module.css';

import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <Image
              src={Logo}
              width={300}
              height={100}
          />
        </Link>
      </div>
        <nav className={styles.divmenu}>
          <Link href={'/productos'}>Productos</Link>
          <Link href={'/contacto'}>Contacto</Link>
        </nav>
    </header>
  )
}

export default Header