import s from "../styles/about.module.css"
import Bulb from "../../public/idea.svg"

const text = `
Aster Electric is a licensed, bonded and fully insured 
electrical contracting company based in Victoria, BC. It
is a locally owned and operated company that provides
quality services throughout the Capital Regional District.
Our qualified electricians offer professional residential 
and commercial electrical installations. We provide the highest
standards of safety, attention to details, and fair and
competitive pricing.
`
export default function About() {
  return (
    <section className={s.container} id="about-section" >
      <Bulb stroke="gray" height="100" style={{ margin: 35 }} />
      <h2 className={s.paragraph}>{text}</h2>
    </section >
  );
}



