import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import styles from '../styles/Home.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Pegapisos Carrillo</title>
            <meta name="descripcion" content="Sitio web de venta de pegapisos"/>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout