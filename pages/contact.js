import Head from "next/head";
import styles from "./styles/contact.module.css";
import Navigation from "./components/nav";
import { description } from "./index";
import Envelop from "../public/contact.svg";
import Name from "../public/about.svg";
import Phone from "../public/phone.svg";


const text = `
Don't hesitate to contact us for all your residential and 
commercial electrical needs in the Greater Victoria Region
`

export default function Contact() {
  return (
    <main>
      <Head>
        <title> ASTERELECTRIC[CONTACT] </title>
        <meta name="description" content={description}></meta>
        <script src="https://smtpjs.com/v3/smtp.js" defer></script>
      </Head>
      <div className={styles.layout}>
        <Navigation />
        <div className={styles.container}>
          <div className={styles.side}>
            {/* This is a side bar */}
          </div>
          <form className={styles.form}>
            <div className={styles.group}>
              <input
                className={styles.input}
                name="name" required
              />
              <label for="name" className={styles.label}>Name</label>
              <Name className={styles.icon} />
            </div>
            <div className={styles.group}>
              <input
                className={styles.input}
                name="email" required
              />
              <label for="email" className={styles.label}>Email</label>
              <Envelop className={styles.icon} />
            </div>
            <div className={styles.group}>
              <input
                className={styles.input}
                name="phone"
                required
                placeholder
              />
              <label for="phone" className={styles.label}>Number ( optional )</label>
              <Envelop className={styles.icon} />
            </div>
            <div className={styles.group}>
              <input
                className={styles.input}
                name="email"
                required
                placeholder
              />
              <label for="email" className={styles.label}>Email</label>
              <Envelop className={styles.icon} />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

