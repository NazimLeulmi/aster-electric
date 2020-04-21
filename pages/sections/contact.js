import styles from "../styles/contact.module.css";
import Envelop from "../../public/contact.svg";
import Name from "../../public/about.svg";
import Phone from "../../public/phone.svg";
import Star from "../../public/star.svg";
import Msg from "../../public/msg.svg";


const text = `
Don't hesitate to contact us for all your residential and 
commercial electrical needs in the Greater Victoria Region
`

export default function Contact() {
  return (
    <section className={styles.container} id="contact-section">
      <div className={styles.formContainer}>
        <img className={styles.img} src="/light.jpg" />
        <form className={styles.form}>
          <h1 className={styles.header}>{text}</h1>
          <div className={styles.group}>
            <input
              className={styles.input}
              name="name"
            />
            <label htmlFor="name" className={styles.label}>Name</label>
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
    </section>
  );
}

