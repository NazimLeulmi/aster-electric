import styles from "../styles/hero.module.css"
export default function Hero() {
  return (
    < div className={styles.imgContainer} >
      <div className={styles.overlay} />
      <h1 className={styles.headerOne}>
        FULLY LICENSED ELECTRICIANS BASED IN VICTORIA,BC
      </h1>
      <img src="/bulb.jpg" alt="light bulb art" className={styles.img} />
    </div >
  );
}



