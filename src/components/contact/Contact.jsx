import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear form data after successful submission
          form.current.reset();
          // Show success toast
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Show error toast
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>markojh13@gmail.com</h5>
            <a
              href="mailto:markojh13@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+381693656387</h5>
            <a
              href="https://api.whatsapp.com/send?phone=0693656387"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTION*/}

        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      {/* Toastify container for notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
