import React, { useRef } from "react";
import "./contact.scss";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "emailjs-com";
import IsInViewPort from "../ui/IsInViewPort";

function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hes4wn2",
      "template_t9exipu",
      form.current,
      "uuFensxY2A961MT_C"
    );
    e.target.reset();
  };

  return (
    <IsInViewPort threshold={0.5} id="contact" className="contact container">
      <h2 className="sec-title">Contact Me</h2>
      <span className="sec-subTitle">Get in touch</span>
      <div className="row">
        <div className="links-wrapper">
          <a href="tel:+213779339748" className="call">
            <div className="left">
              <BiPhone />
            </div>
            <div className="right">
              <p>Call me</p>
              <span>+213-779-339-748</span>
            </div>
          </a>
          <a href="mailto:kheireddineboukhatem1@gmail.com" className="call">
            <div className="left">
              <MdOutlineEmail />
            </div>
            <div className="right">
              <p>Email</p>
              <span>kheireddineboukhatem1@gmail.com</span>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/dir/%D8%AC%D8%AF%D9%8A%D9%88%D9%8A%D8%A9%E2%80%AD//@35.9296438,0.8651533,13z/data=!4m8!4m7!1m5!1m1!1s0x1283df4a119436f7:0x4305163d294ba6c!2m2!1d0.8302196!2d35.9296489!1m0"
            target="_blank"
            className="call"
            rel="noreferrer"
          >
            <div className="left">
              <HiOutlineLocationMarker />
            </div>
            <div className="right">
              <p>Location</p>
              <span>Djdiouia, Relizen - Algeria</span>
            </div>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            name="name"
            className="name-input"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input
            name="email"
            className="email-input"
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="7"
            className="message-input"
            type="text"
            placeholder="Your Message"
            required
          />
          <button className="primaryButton" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </IsInViewPort>
  );
}

export default Contact;
