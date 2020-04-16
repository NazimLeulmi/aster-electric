import Head from "next/head";
import styles from "./styles/about.module.css";
import Navigation from "./components/nav";
import { description } from "./index";

const text = `
From safety & peace-of-mind to convenience & style, our Vancouver electrician
services & installation will help you feel comfortable at home and increase your
property's value. When you use WireChief Electric - Licensed & Insured Electrical
Contractor - for your electrical installations, renovation projects or new construction
you are getting quality work, expert advice,  & friendly customer service by experienced electricians.
`
const why = `
On Time and Affordable Pricing
None of our electricians want to waste any of your precious time away from your 
family, that’s why we guarantee on-time appointments. If your trusted electrician
is late for any reason, your service is on us! We won’t catch you off guard with
hidden costs or fees. We let you know upfront what your bill will
look like and will get your approval on any extra work so you’re included in 
every step of the process!
`
export default function About() {
  return (
    <main>
      <Head>
        <title> Aster Electric </title>
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
