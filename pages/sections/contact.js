import styles from "../styles/contact.module.css";
import Envelop from "../../public/contact.svg";
import Name from "../../public/about.svg";
import Phone from "../../public/phone.svg";
import Star from "../../public/star.svg";
import Msg from "../../public/msg.svg";


const text = `
Don't hesitate to contact us for all your residential and 
commercial electrical needs in the Greater Victoria Region
`

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
    errors: [],
    loading: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, text } = this.state;
    const xhr = new XMLHttpRequest();
    const url = "http://localhost/php/email.php";
    xhr.open("GET", `${url}?name=${name}&email=${email}&phone=${phone}&subject=${subject}&text=${text}`, true)
    xhr.onload = () => {
      this.setState({ loading: false })
      if (/^[\],:{}\s]*$/.test(xhr.responseText.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        console.log("valid JSON response")
        const fromPhp = JSON.parse(xhr.responseText);
        this.setState({ errors: fromPhp.errors });
      } else {
        console.log("invalid JSON")
        this.setState({ errors: ["The email has been sent"] });
        const element = document.getElementById("error");
        element.style.color = "blue"
      }
    }
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 3) {
        console.log("Loading");
        this.setState({ loading: true })
      }
      if (xhr.readyState == 4) {
        console.log("Finished Loading");
        this.setState({ loading: false })
      }
    };
    xhr.onerror = (e) => {
      console.log(e);
    }
    xhr.send();
  }
  render = () => (
    <section className={styles.container} id="contact-section">
      <div className={styles.formContainer}>
        <img className={styles.img} src="/light.jpg" />
        <form className={styles.form}>
          <h1 className={styles.header}>{text}</h1>
          <div className={styles.group}>
            <input
              className={styles.input}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="name" className={styles.label}>Name</label>
            <Name className={styles.icon} />
          </div>
          <div className={styles.group}>
            <input
              className={styles.input}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="email" className={styles.label}>Email</label>
            <Envelop className={styles.icon} />
          </div>
          <div className={styles.group}>
            <input
              className={styles.input}
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="250-XXX-3459"
            />
            <label htmlFor="phone" className={styles.label}>Number ( optional )</label>
            <Phone className={styles.icon} />
          </div>
          <div className={styles.group}>
            <input
              className={styles.input}
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
            />
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <Star className={styles.icon} />
          </div>
          <div className={styles.textbox}>
            <textarea
              className={styles.textarea}
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <label htmlFor="text" className={styles.label}>Message</label>
            <Msg className={styles.icon} />
          </div>
          {this.state.errors.length === 0 ? null :
            <p className={styles.error} id="error">{this.state.errors[0]}</p>
          }
          <button className={styles.btn}
            onClick={this.submit}
            disabled={this.state.loading}>
            {this.state.loading ? <div className={styles.spinner} /> : null}
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

