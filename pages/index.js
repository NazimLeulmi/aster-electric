import Head from "next/head";
import styles from "./styles/index.module.css";
import Navigation from "./components/nav";
import Intro from "./sections/intro";
import Hero from "./sections/hero";
import Services from "./sections/services";
// import Intro from "./components/intro";
import Reviews from "./components/reviews";


export const description = `Aster Electric offers quality electrical services in 
Victoria, BC. Our electricians provide residential and commercial electrical
installation and repairs.`

export default function Index() {
  return (
    <main>
      <Head>
        <title>AsterElectric | Home</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div className={styles.layout}>
        <Navigation />
        <div className={styles.container}>
          <Intro />
          <Hero />
          <Services />
          {/* Reviews */}
          {/* <Reviews /> */}
        </div>
      </div>
    </main>
  );
}
