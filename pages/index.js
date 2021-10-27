import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lunch in Cosmos | Lunch Menu</title>
        <meta name="keywords" content="lunch-menu" />
      </Head>
      
      <main className={styles.container}>
        <h1 className={styles.title}>This week&rsquo;s lunch</h1>
        <p className={styles.text}>Juice box included with every meal</p>
        <ul>
          <li>Monday: Curry lamb no lamb.</li>
          <li>Tuesday: Fried broccoli wings.</li>
          <li>Wednesday: Salmon pie.</li>
          <li>Thursday: Spicy rice cakes.</li>
          <li>Friday: Matoke with veggie stew.</li>
        </ul>
      </main>
    </>
  );
}
