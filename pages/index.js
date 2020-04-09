import Head from "next/head";
import styles from "./styles/index.module.css";
import Navigation from "./components/nav";
import Hero from "./components/hero";
import Services from "./components/services";
import Intro from "./components/intro";
import ServicesIntro from "./components/servIntro";
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
          {/* First Section : Hero Image + Main Header */}
          <Hero />
          {/* Second Section : A brief About us with a link to the about us page*/}
          <Intro />
          {/* Third Section : Electrical services Intro */}
          <ServicesIntro />
          {/* Third Section : Electrical services */}
          <Services />
          {/* Reviews */}
          <Reviews />
        </div>
      </div>
    </main>
  );
}
