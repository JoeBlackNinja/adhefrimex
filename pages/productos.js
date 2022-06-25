import Card from "../components/Card";
import Layout from '../components/Layout';

import styles from '../styles/Card.module.css';
import database from '../components/database';

const productos = () => {
  return (
      <Layout>
        <div className={styles.divBody}>
          {database().map(p => (
            <Card
              titulo={p}
            />
          ))}
        </div>  
      </Layout>
  )
}

export default productos