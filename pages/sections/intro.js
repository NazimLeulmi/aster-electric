import s from "../styles/intro.module.css"
import Phone from "../../public/phone.svg";
import Envelop from "../../public/contact.svg"
import Msg from "../../public/msg.svg"

const why = `
Our focus in providing quality residential and commercial services combined 
with honest and reliable electricians makes us the first choice of many home 
and business owners in the area.All work is performed or supervised by 
experienced electricians.`

const text = `We are passionate and specialized in every aspect of the electrical trade. 
From residential to commercial electrical services`
export default function Hero() {
  return (
    <section className={s.container} >
      <h1 className={s.headerOne}>
        FULLY LICENSED ELECTRICIANS BASED IN VICTORIA BC
      </h1>
      <p className={s.text}>{text}</p>
      <div className={s.group}>
        <a href="tel:+12507276596" style={{ width: 95 }} className={s.link}>
          <Phone className={s.icon} />
          Call
      </a>
        <a href="sms:+12507276596" style={{ width: 95 }} className={s.link}>
          <Msg className={s.icon} />
          Text
      </a>
      </div>
      <a href="#" className={s.link}>
        <Envelop className={s.icon} />
        Request a quate
      </a>
    </section >
  );
}



