import styles from "../styles/servIntro.module.css"

const text = `
We are passionate and specialized in every aspect of the electrical trade. From residential to 
commercial electrical services, electrical lighting and power to low voltage, and lighting control.`

export default function ServicesIntro() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Electrical services</h2>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
}


