import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";
import Image from "next/image";
import Panfleto from '../public/panfleto.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.divImage}>
          <h2>Somos fabricantes de adhesivos
            para todo tipo de pisos, cerámicos 
            y piedra
          </h2>
          <Image
            src={Panfleto}
            width={500}
            height={1000}
          />
        </div>
      </Layout>
    </div>
  );
}
