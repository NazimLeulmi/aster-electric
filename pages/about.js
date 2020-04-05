import Head from "next/head";
import styles from "./styles/about.module.css";
import Navigation from "./components/nav";
import { description } from "./index";
export default function About() {
  return (
    <main>
      <Head>
        <title> ASTERELECTRIC[ABOUT] </title>
        <meta name="description" content={description}></meta>
      </Head>
      <div className={styles.layout}>
        <Navigation />
        <div className={styles.container}>
        </div>
      </div>
    </main>
  );
}
