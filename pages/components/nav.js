import Link from 'next/link';
import styles from "../styles/nav.module.css"
export default function About() {
	return (
		<ul>
			<Link href="/about">
				<a className={styles.anker}>About</a>
			</Link>
			<Link href="/">
				<a>Home</a>
			</Link>

		</ul>
	);
}
