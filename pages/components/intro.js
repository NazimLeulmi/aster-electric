import styles from "../styles/intro.module.css"
import Link from "next/link";
const aster = `
Aster Electric is a licensed, bonded and fully insured electrical contracting company
based in Victoria, BC. It is a locally owned and operated company that provides quality
services throughout the Capital Regional District. Our qualified electricians offer professional
residential and commercial electrical installations. We provide the highest standards of safety, 
attention to details, and fair and competitive pricing.
`
export default function Intro() {
  return (
    <div className={styles.container}>
      <h2 className={styles.aboutHeader}>Who are we ?</h2>
      <p className={styles.aboutParagraph}>
        {aster}
      </p>
      <Link href="/about">
        <a className={styles.aboutLink}>Read more</a>
      </Link>
    </div>
  );
}

