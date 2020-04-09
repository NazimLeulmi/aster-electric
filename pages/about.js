import Head from "next/head";
import styles from "./styles/about.module.css";
import Navigation from "./components/nav";
import { description } from "./index";
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
