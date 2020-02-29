import Link from 'next/link';
import styles from "../styles/nav.module.css"
export default function About() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logoContainer}>
				<img src="/atom.png" alt="Logo" className={styles.logo} />
				<h3 className={styles.company}>ASTER ELECTRIC</h3>
			</div>
			<img src="/menu.png" alt="burger-menu" className={styles.menuIcon} />
		</nav>
	);
}
