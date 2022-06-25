import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";

import Watssapp from "../public/watsapp.svg";
import Gmail from '../public/gmail.svg';
import Phone from '../public/phone.svg';

import styles from "../styles/Home.module.css";

const productos = () => {
  return (
    <Layout>
      <div className={styles.divMainContacto}>
        <h1>Gracias por interesarte en nosotros</h1>        
            <div className={styles.firstCol}>
              <Link href={"https://web.whatsapp.com/"}>
                <a>
                  <Image src={Watssapp} width={55} height={60} />
                </a>
              </Link>
              <h4>3323234567</h4>            
            </div>
            <div className={styles.firstCol}>
              
                  <Image src={Phone} width={55} height={60} />
               
              <h4>3321307184</h4>
              <h4>3322351079</h4>  
              <h4>3317677151</h4>          
            </div>
            <div className={styles.secondCol}>
              <Link href={"https://gmail.com/"}>
                <a>
                  <Image src={Gmail} width={50} height={50} />
                </a>
              </Link>            
              <h4>ventas.adhefirmex@gmail.com</h4>
              <h4>contacto.adhefirmex@gmail.com</h4>
            </div>
          

          <div className={styles.cols}>
            <div className={styles.firstCol}>
              
            </div>
            <div className={styles.secondCol}>
             
            </div>
          </div>

        

       
        {/*           <div className={styles.socialContainer}>
            <Link href={"https://www.facebook.com/adhefirmex/"}>
              <a>
                <Image src={Facebook} width={55} height={60} />
              </a>
            </Link>
            
          </div>
          <div className={styles.socialContainer}>
            <Link href={"https://twitter.com/"}>
              <a>
                <Image src={Twitter} width={55} height={60} />
              </a>
            </Link>
            
          </div>
          <div className={styles.socialContainer}>
            <Link href={"/"}>
              <a>
                <Image src={Instagram} width={55} height={60} />
              </a>
            </Link>
            
          </div> */}
      </div>
    </Layout>
  );
};

export default productos;
