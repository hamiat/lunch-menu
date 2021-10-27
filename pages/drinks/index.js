import styles from "../../styles/Drinks.module.css";
import Head from "next/head";

const Beverages = () => {
  return (
    <>
      <Head>
        <title>Lunch in Cosmos | Drinks</title>
        <meta name="keywords" content="lunch-menu" />
      </Head>
      
      <main>
        <h1>This week&rsquo;s beverages</h1>
        <p className={styles.text}>Water or juice box included in meal.</p>
      </main>
    </>
  );
};

export default Beverages;
