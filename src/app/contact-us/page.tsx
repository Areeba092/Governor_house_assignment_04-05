
import Header from "../responsive/header";
import Footer from "../responsive/footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-parent">
        <div className="contact-left">
          <h1 className="getintouch">Get in Touch</h1>
          <p className="touch">
            &quot;We&#39;d love to hear from you! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out using
            the form below.&quot; <br /> Here are Our Social Links:
          </p>
        </div>

        <div className="contact-right">
          <h1 className="form-heading">Contact Form</h1>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />

          <label htmlFor="number">Number</label>
          <br />
          <input type="number" id="number" name="number" />
          <br />
          <button className="btn">Submit</button>
        </div>
      </div>

      <div className="icons">
        <Link href="https://www.linkedin.com/in/areeba-qureshi-a181752b4/">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </Link>

        <Link href="https://github.com/Areeba092">
          <i className="fa-brands fa-github"></i> Github
        </Link>

        <Link href="https://www.facebook.com/babaki.shezadi.7737">
          <i className="fa-brands fa-facebook"></i> Facebook
        </Link>

        <Link href="mailto:areebaq491@gmail.com">
          <i className="fa-solid fa-envelope"></i> areebaq491@gmail.com
        </Link>
      </div>

      <Footer />
    </div>
  );
}
