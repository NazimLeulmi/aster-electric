import styles from "../styles/nav.module.css";
import Menu from "../../public/menu.svg";
import Close from "../../public/close.svg";
import Home from "../../public/home.svg";
import About from "../../public/about.svg";
import Contact from "../../public/contact.svg";
import Star from "../../public/star.svg";
import Location from "../../public/location.svg";
import Services from "../../public/services.svg";
import Phone from "../../public/phone.svg";
import Facebook from "../../public/facebook.svg";
import Gallery from "../../public/gallery.svg";
import Link from "./link";
export default class NavBar extends React.Component {
	state = {
		isOpened: false,
	}
	triggerMenu = (e) => {
		const { isOpened } = this.state;
		const linksContainer = document.querySelector("#links-container");
		const links = document.querySelectorAll("#links-container > div");
		console.log(linksContainer, "container");
		console.log(links, "linksArray");
		if (isOpened === true) {
			for (let i = 0; i < links.length; i++) {
				links[i].style.display = "none";
			}
			linksContainer.style.height = "0px"
		} else {
			linksContainer.style.height = "auto"
			// setTimeout(() => {
			for (let i = 0; i < links.length; i++) {
				links[i].style.display = "flex";
			}
			this.setState({ isOpened: !isOpened });
			// }, 500);
		}
		this.setState({ isOpened: !isOpened });
	}
	triggerLink = (e) => {

	}
	render() {
		const { isOpened } = this.state;
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
						<About fill="#979ba6" className={styles.icon} />
						<Link activeClassName={styles.active} href="/about">
							<a className={styles.link}>About</a>
						</Link>
					</div>
					<div className={styles.group}>
						<Home fill="#979ba6" className={styles.icon} />
						<Link activeClassName={styles.active} href="/">
							<a className={styles.link}>Home</a>
						</Link>
					</div>
					<div className={styles.group}>
						<Contact fill="#979ba6" className={styles.icon} />
						<Link activeClassName={styles.active} href="/contact">
							<a className={styles.link}>Contact</a>
						</Link>
					</div>
					<div className={styles.group}>
						<Services fill="#979ba6" className={styles.icon} />
						<Link activeClassName={styles.active} href="/services" >
							<a className={styles.link}>Services</a>
						</Link>
					</div>
					<div className={styles.group}>
						<Gallery fill="#979ba6" className={styles.icon} />
						<Link href="/gallery" activeClassName={styles.active} >
							<a className={styles.link}>Gallery</a>
						</Link>
					</div>
					{/* Footer */}
					<div className={styles.footer} style={{ marginTop: "auto" }}>
						<Contact fill="#979ba6" className={styles.footerIcon} />
						<p className={styles.Txt}>info@asterelectric.ca</p>
					</div>
					<div className={styles.footer}>
						<Phone fill="#979ba6" className={styles.footerIcon} />
						<p className={styles.Txt}>250-727-6596</p>
					</div>
					<div className={styles.footer}>
						<Facebook fill="#979ba6" className={styles.footerIcon} />
						<a className={styles.Txt}
							href="https://www.facebook.com/AsterElectric.Victoria/">
							Facebook page
						</a>
					</div>
					<div className={styles.footer}>
						<Location fill="#979ba6" className={styles.footerIcon} />
						<p className={styles.Txt}>3631 Savannah avenue</p>
					</div>
				</div>
			</nav>
		)
	}
}
