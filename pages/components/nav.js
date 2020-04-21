import styles from "../styles/nav.module.css";
import Menu from "../../public/menu.svg";
import Close from "../../public/close.svg";
import Home from "../../public/home.svg";
import About from "../../public/about.svg";
import Contact from "../../public/contact.svg";
import Services from "../../public/services.svg";
import Reviews from "../../public/msg.svg";
export default class NavBar extends React.Component {
	state = {
		isOpened: false,
		active: "intro"
	}
	componentDidMount = () => {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return;
		} else {
			const container = document.getElementById("main-container");
			container.addEventListener("scroll", (e) => {
				const { active } = this.state;
				const scroll = parseInt(container.scrollTop);
				if (scroll > 0 && scroll <= 750) {
					if (active === "intro") return;
					this.setState({ active: "intro" })
				} else if (scroll > 750 && scroll < 1200) {
					if (active === "services") return;
					this.setState({ active: "services" })
				} else if (scroll > 1400 && scroll < 1850) {
					if (active === "about") return;
					this.setState({ active: "about" })
				} else if (scroll > 1850 && scroll < 2000) {
					if (active === "contact") return;
					this.setState({ active: "contact" })
				}
				else if (scroll > 2000) {
					if (active === "reviews") return;
					this.setState({ active: "reviews" })
				}
			})
		}
	}
	componentWillUnmount = () => {
		const container = document.getElementById("main-container");
		container.removeEventListener("scroll");
	}
	triggerMenu = (e) => {
		const { isOpened } = this.state;
		const linksContainer = document.querySelector("#links-container");
		const links = document.querySelectorAll("#links-container > div");
		if (isOpened === true) {
			for (let i = 0; i < links.length; i++) {
				links[i].style.display = "none";
			}
			linksContainer.style.height = "0px"
		} else {
			linksContainer.style.height = "500px"
			// setTimeout(() => {
			for (let i = 0; i < links.length; i++) {
				links[i].style.display = "flex";
			}
			this.setState({ isOpened: !isOpened });
			// }, 500);
		}
		this.setState({ isOpened: !isOpened });
	}
	link = (e) => {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			this.triggerMenu();
		}
	}
	render() {
		const { isOpened, active } = this.state;
		return (
			<nav className={styles.nav}>
				{/* Company Logo & Name */}
				<div className={styles.logoContainer}>
					<img src="/aster.png" alt="Logo" style={{ margin: 10 }} />
					<h3 className={styles.company}>ASTER ELECTRIC</h3>
				</div>
				{/* Burger Menu */}
				{isOpened ?
					<Close className={styles.menuToggle} onClick={this.triggerMenu} /> :
					<Menu className={styles.menuToggle} onClick={this.triggerMenu} />
				}
				{/* Links */}
				<div className={styles.linksContainer} id="links-container">
					<div className={styles.group}>
						<Home fill="#979ba6" className={styles.icon} />
						<a href="#intro-section"
							className={active === "intro" ? styles.active : styles.link}
							name="intro"
							onClick={this.link}
						>
							Home
						</a>
					</div>
					<div className={styles.group}>
						<Services fill="#979ba6" className={styles.icon} />
						<a href="#services-section"
							className={active == "services" ? styles.active : styles.link}
							name="services"
							onClick={this.link}
						>
							Services
						</a>
					</div>
					<div className={styles.group}>
						<About fill="#979ba6" className={styles.icon} />
						<a href="#about-section"
							className={active === "about" ? styles.active : styles.link}
							name="about"
							onClick={this.link}
						>
							About
					  </a>
					</div>

					<div className={styles.group}>
						<Contact fill="#979ba6" className={styles.icon} />
						<a href="#contact-section"
							className={active === "contact" ? styles.active : styles.link}
							name="contact"
							onClick={this.link}
						>
							Contact
						</a>
					</div>

					<div className={styles.group}>
						<Reviews fill="#979ba6" className={styles.icon} />
						<a href="#reviews-section"
							className={active === "reviews" ? styles.active : styles.link}
							name="reviews"
							onClick={this.link}
						>
							Reviews
						</a>
					</div>
					{/* Footer */}
					<div className={styles.footer} >
						<p className={styles.Txt}>info@asterelectric.ca</p>
						<p className={styles.Txt}>250-727-6596</p>
						<a className={styles.Txt}
							href="https://www.facebook.com/AsterElectric.Victoria/">
							Facebook page
						</a>
						<p className={styles.Txt}>3631 Savannah avenue</p>
					</div>
				</div>
			</nav >
		)
	}
}
