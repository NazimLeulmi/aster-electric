import Head from "next/head";
import styles from "./styles/index.module.css";
import Navigation from "./components/nav";
import Hero from "./components/hero";
import Services from "./components/services";
import Intro from "./components/intro";
import ServicesIntro from "./components/servIntro";

const description = `Aster Electric offers quality electrical services in 
Victoria, BC. Our electricians provide residential and commercial electrical
installation and repairs.`
const safety = `Safety is a huge part of the way we do business. All of our employees are
fully licensed, and we make sure to instill a safety culture within the workplace.
No project will be handled without taking proper safety precautions.`
const text = `
From safety & peace-of-mind to convenience & style, our Vancouver electrician
services & installation will help you feel comfortable at home and increase your
property's value. When you use WireChief Electric - Licensed & Insured Electrical
Contractor - for your electrical installations, renovation projects or new construction
you are getting quality work, expert advice,  & friendly customer service by experienced electricians.
`
const why = `
Our focus in providing quality residential and commercial services combined with honest 
and reliable electricians makes us the first choice of many home and business owners in the area.
All work is performed or supervised by electricians with more that 25 years of experience who are licensed
`

export default function Index() {
  return (
    <main>
      <Head>
        <title>AsterElectric | Home</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div className={styles.container}>
        <Navigation />
        {/* First Section : Hero Image + Main Header */}
        <Hero />
        {/* Second Section : A brief About us with a link to the about us page*/}
        <Intro />
        {/* Third Section : Electrical services Intro */}
        <ServicesIntro />
        {/* Third Section : Electrical services */}
        <Services />
        {/* Fourth Section : Reviews */}
        <div className={styles.reviewsContainer}>
          <h2 className={styles.aboutHeader}>Testimonials</h2>
        </div>
      </div>
    </main>
  );
}
