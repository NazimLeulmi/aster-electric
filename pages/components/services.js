import styles from "../styles/services.module.css"
export const residential = [
	"New construction", "Service upgrades",
	"Renovations", "Service calls", "Home rewiring",
	"Electrical repairs", "Electrical troubleshooting", "Electrical inspections",
]

export const commercial = [
	, "Lighting Installation", "Service calls", "Electrical inspections",
	"Wiring electric panels & sub panels", "Electrical equipment Installations",
	"EV charging station Installation", "Data/Communication", "Service upgrades"
]

export default function Services() {
	return (
		<div className={styles.servicesFlex}>
			{/* Section 3.1 : Residential services*/}
			<div className={styles.servicesContainer}>
				<img src="/house.png" alt="Residential Services" className={styles.servicesImg} />
				<h3 className={styles.servicesHeader}>RESIDENTIAL</h3>
				{residential.map((service) => {
					return (
						<h4 key={service} className={styles.service}>
							{service}
						</h4>
					)
				})}
			</div>
			{/* Section 3.2 : Commercial services*/}
			<div className={styles.servicesContainer}>
				<img src="/building.png" alt="Commercial Services" className={styles.servicesImg} />
				<h3 className={styles.servicesHeader}>COMMERCIAL</h3>
				{commercial.map((service) => {
					return (
						<h4 key={service} className={styles.service}>
							{service}
						</h4>
					)
				})}
			</div>
		</div>
	);
}

