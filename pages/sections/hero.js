import s from "../styles/hero.module.css"
import Helmet from "../../public/helmet.svg"

const text = `Safety is a huge part of the way we do business. All of our employees are
fully licensed, and we make sure to instill a safety culture within the workplace.
No project will be handled without taking proper safety precautions.`

export default function Hero() {
  return (
    <section className={s.container} id="hero-section" >
      <Helmet fill="gray" height="100" style={{ margin: 35 }} />
      <h2 className={s.paragraph}>{text}</h2>
    </section >
  );
}



