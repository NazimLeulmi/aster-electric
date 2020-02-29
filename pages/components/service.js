import styles from "../styles/service.module.css"
export default function Service({ service }) {
	return (
		<div className={styles.serviceContainer}>
			<img src="/thunder.png" className={styles.serviceLogo} />
			<h4 className={styles.service}>{service}</h4>
		</div>
	);
}
