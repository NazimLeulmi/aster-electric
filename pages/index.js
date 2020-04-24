import Head from "next/head";
import styles from "./styles/index.module.css";
import Navigation from "./components/nav";
import Intro from "./sections/intro";
import Hero from "./sections/hero";
import Services from "./sections/services";
import About from "./sections/about";
import Contact from "./sections/contact";
import Reviews from "./sections/reviews";


export const description = `Aster Electric offers quality electrical services in 
Victoria, BC. Our electricians provide residential and commercial electrical
installation and repairs.`

export default function Index() {
  return (
    <main>
      <Head>
        <title>Aster Electric</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div className={styles.layout} id="main-layout">
        <Navigation />
        <div className={styles.container} id="main-container" >
          <Intro />
          <Hero />
          <Services />
          <About />
          <Contact />
          <Reviews />
        </div>
      </div>
    </main>
  );
}
