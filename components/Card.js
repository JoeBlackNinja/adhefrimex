import styles from "../styles/Card.module.css";

import Image from "next/image";
import Pedaguro from "../public/pegaduro.jpg";

const Card = (props) => {
  return (
    <div className={styles.divMain}>
      <div class={styles.card}>
        <Image src={Pedaguro} width={200} height={240} />
        <div className={styles.container}>
          <h4>
            <b>{props.titulo}</b>
          </h4>
          <p>Lorem ipsum at servues</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
