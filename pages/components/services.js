import styles from "../styles/services.module.css"
import Service from "./service";
export const residential = [
	"New Construction", "Service Upgrades",
	"Renovations", "Service Calls",
	"Electrical Repairs", "Electrical Troubleshooting", "Electrical Inspections",
]

export const commercial = [
	"Home Rewiring", "Lighting Installation",
	"Wiring Electrical Panels and Sub Panels", "Electrical Equipment Installations Calls",
	"EV Charging Station Installation", "Data/Communication",
]

export default function Services() {
	return (
		<div className={styles.servicesFlex}>
			{/* Section 3.1 : Residential services*/}
			<div className={styles.servicesContainer}>
				<img src="/house.png" alt="Residential Services" className={styles.servicesImg} />
				<h3 className={styles.servicesHeader}>RESIDENTIAL</h3>
				{residential.map((service) => {
					return <Service service={service} key={service} />
				})}
			</div>
			{/* Section 3.2 : Commercial services*/}
			<div className={styles.servicesContainer}>
				<img src="/building.png" alt="Commercial Services" className={styles.servicesImg} />
				<h3 className={styles.servicesHeader}>COMMERCIAL</h3>
				{commercial.map((service) => {
					return <Service service={service} key={service} />
				})}
			</div>
		</div>
	);
}

