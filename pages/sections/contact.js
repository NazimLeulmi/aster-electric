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
    valid: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  validateForm = (e) => {
    const { name, email, phone, subject, text, valid } = this.state;
    let errors = [];
    // name input validation 
    if (name === "" || name === null || name === undefined) {
      errors.push("The name is required");
    } else if (name.length > 150) {
      errors.push("The name is too long");
    }
    // email validation
    if (email === "" || email === null || email === undefined) {
      errors.push("The email is required");
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
      errors.push("The email is invalid")
    }
    else if (email.length > 200) {
      errors.push("The email is too long");
    }
    // phone validation
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone != "" && regex.test(phone) == false) {
      errors.push("The phone number is invalid")
    }
    // subject
    if (subject === "" || subject === null || subject === undefined) {
      errors.push("The subject is required");
    } else if (subject.length > 200) {
      errors.push("The subject is too long");
    }
    // text
    if (text === "" || text === null || text === undefined) {
      errors.push("The message is required");
    }

    this.setState({ errors, valid: errors.length === 0 })
  }
  submit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, text, valid } = this.state;
    // this.validateForm();
    // if (valid === false) return;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = "true";
    const url = "http://localhost/php/email.php";
    xhr.open("GET", `${url}?name=${name}&email=${email}&phone=${phone}&subject=${subject}&text=${text}`, true)
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.onload = () => {
      console.log(xhr.response)
    }
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
            <p className={styles.error}>{this.state.errors[0]}</p>
          }
          <button className={styles.btn} onClick={this.submit}>SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

