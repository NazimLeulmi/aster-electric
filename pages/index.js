import Head from "next/head";
import styles from "./styles/index.module.css";
import Navigation from "./components/nav";
import Link from 'next/link';
import { commercial, residential } from "./components/servicesList";
import Service from "./components/service";

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
const services = `
We are passionate and specialized in every aspect of the electrical trade. From residential to 
commercial electrical services, electrical lighting and power to low voltage, and lighting control.`
const aster = `
Aster Electric is a licensed, bonded and fully insured electrical contracting company
based in Victoria, BC. It is a locally owned and operated company that provides quality
services throughout the Capital Regional District. Our qualified electricians offer professional
residential and commercial electrical installations. We provide the highest standards of safety, 
attention to details, and fair and competitive pricing.
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
        <div className={styles.imgContainer}>
          <div className={styles.overlay} />
          <h1 className={styles.headerOne}>
            FULLY LICENSED ELECTRICIANS BASED IN VICTORIA,BC
          </h1>
          <img src="/bulb.jpg" alt="light bulb art" className={styles.img} />
        </div>
        {/* Second Section : A brief About us with a link to the about us page*/}
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutHeader}>Who are we ?</h2>
          <p className={styles.aboutParagraph}>{aster}</p>
          <Link href="/about">
            <a className={styles.aboutLink}>About us</a>
          </Link>
        </div>
        {/* Third Section : Electrical services Intro */}
        <div className={styles.servicesIntro}>
          <h2 className={styles.aboutHeader}>Electrical services</h2>
          <p className={styles.aboutParagraph} >{services}</p>
        </div>
        {/* Third Section : Electrical services */}
        <div className={styles.servicesFlex}>
          {/* Section 3.1 : Residential services*/}
          <div className={styles.servicesContainer}>
            <img src="/house.png" alt="Residential Services" className={styles.servicesImg} />
            <h3 className={styles.servicesHeader}>RESIDENTIAL</h3>
            {residential.map((service) => {
              return <Service service={service} />
            })}
          </div>
          {/* Section 3.2 : Commercial services*/}
          <div className={styles.servicesContainer}>
            <img src="/building.png" alt="Commercial Services" className={styles.servicesImg} />
            <h3 className={styles.servicesHeader}>COMMERCIAL</h3>
            {commercial.map((service) => {
              return <Service service={service} />
            })}
          </div>
        </div>
        <div className={styles.reviewsContainer}>
          <h2 className={styles.aboutHeader}>Testimonials</h2>
        </div>
      </div>
    </main>
  );
}
