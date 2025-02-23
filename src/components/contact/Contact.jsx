import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
    
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
          form.current.reset();
          toast.success(t("contact.toast.success"));
        },
        (error) => {
          toast.error(t("contact.toast.error"));
        }
      );
  };

  return (
    <section id="contact">
      <h5>{t("contact.getInTouch")}</h5>
      <h2>{t("contact.title")}</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>{t("contact.email.title")}</h4>
            <h5>markojh13@gmail.com</h5>
            <a href="mailto:markojh13@gmail.com" target="_blank" rel="noreferrer">
              {t("contact.sendMessage")}
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>{t("contact.whatsapp.title")}</h4>
            <h5>+381693656387</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+381693656387"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.sendMessage")}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name="name"
            placeholder={t("contact.form.name.placeholder")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.form.email.placeholder")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("contact.form.message.placeholder")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("contact.form.submit")}
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;