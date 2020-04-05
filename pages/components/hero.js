import styles from "../styles/hero.module.css"

const why = `
Our focus in providing quality residential and commercial services combined 
with honest and reliable electricians makes us the first choice of many home 
and business owners in the area.All work is performed or supervised by 
experienced electricians.`
export default function Hero() {
  return (
    <div className={styles.imgContainer} >
      <img src="/bulb.jpg" alt="light bulb art" className={styles.img} />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <h1 className={styles.headerOne}>
          FULLY LICENSED ELECTRICIANS BASED IN VICTORIA,BC
        </h1>
        <p className={styles.text} >
          {why}
        </p>
      </div>
    </div >
  );
}



