import styles from "../styles/services.module.css"
import House from "../../public/house.svg"
import Building from "../../public/building.svg"

export const residential = [
	"New construction", "Service upgrades",
	"Renovations", "Service calls", "Home rewiring",
	"Electrical repairs", "Electrical troubleshooting", "Electrical inspections",
]

export const commercial = [
	, "Lighting Installation", "Service calls", "Electrical inspections",
	"Wiring electric panels & sub panels", "Electrical equipment installations",
	"EV charging station Installation", "Data/Communication", "Service upgrades"
]

export default function Services() {
	return (
		<section className={styles.layout} id="services-section">
			<h2 className={styles.header}>Electrical services</h2>
			{/* Section 3.1 : Residential services*/}
			<div className={styles.container}>
				<House className={styles.servicesImg} />
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
			<div className={styles.container}>
				<Building className={styles.servicesImg} />
				<h3 className={styles.servicesHeader}>COMMERCIAL</h3>
				{commercial.map((service) => {
					return (
						<h4 key={service} className={styles.service}>
							{service}
						</h4>
					)
				})}
			</div>
		</section>
	);
}

