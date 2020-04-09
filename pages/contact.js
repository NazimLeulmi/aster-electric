import Head from "next/head";
import styles from "./styles/contact.module.css";
import Navigation from "./components/nav";
import { description } from "./index";
import Envelop from "../public/contact.svg";
import Name from "../public/about.svg";
import Phone from "../public/phone.svg";
import Star from "../public/star.svg";
import Msg from "../public/msg.svg";


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
          <div className={styles.formContainer}>
            <img className={styles.img} src="/light.jpg" />
            <form className={styles.form}>
              <h1 className={styles.header}>{text}</h1>
              <div className={styles.group}>
                <input
                  className={styles.input}
                  name="name"
                />
                <label for="name" className={styles.label}>Name</label>
                <Name className={styles.icon} />
              </div>
              <div className={styles.group}>
                <input
                  className={styles.input}
                  name="email"
                />
                <label htmlFor="email" className={styles.label}>Email</label>
                <Envelop className={styles.icon} />
              </div>
              <div className={styles.group}>
                <input
                  className={styles.input}
                  name="phone"
                />
                <label htmlFor="phone" className={styles.label}>Number ( optional )</label>
                <Phone className={styles.icon} />
              </div>
              <div className={styles.group}>
                <input
                  className={styles.input}
                  name="subject"
                />
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <Star className={styles.icon} />
              </div>
              <div className={styles.textbox}>
                <textarea className={styles.textarea} />
                <label htmlFor="subject" className={styles.label}>Message</label>
                <Msg className={styles.icon} />
              </div>
              <button className={styles.btn}>SUBMIT</button>
            </form>

          </div>

        </div>
      </div>
    </main>
  );
}

