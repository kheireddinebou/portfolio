import React, { useEffect, useRef } from "react";
import "./contact.scss";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "emailjs-com";
import { useDispatch } from "react-redux";
import { setActiveSec } from "../../redux/activeSecSlice";

function Contact() {
  const form = useRef();
  const ref = useRef();
  const dispatch = useDispatch();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(setActiveSec(entry.target.id));
      }
    },
    { threshold: 0.5 }
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

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
    <div  ref={ref} id="contact" className="contact container">
      <h2 className="sec-title">Contact Me</h2>
      <span className="sec-subTitle">Get in touch</span>
      <div className="row">
        <div className="links-wrapper">
          <a href="tel:+213675196759" className="call">
            <div className="left">
              <BiPhone />
            </div>
            <div className="right">
              <p>Call me</p>
              <span>+213-675-196-759</span>
            </div>
          </a>
          <a href="mailto:kheiereddin2004@gmail.com" className="call">
            <div className="left">
              <MdOutlineEmail />
            </div>
            <div className="right">
              <p>Email</p>
              <span>kheiereddin2004@gmail.com</span>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/dir/%D8%AC%D8%AF%D9%8A%D9%88%D9%8A%D8%A9%E2%80%AD//@35.9296438,0.8651533,13z/data=!4m8!4m7!1m5!1m1!1s0x1283df4a119436f7:0x4305163d294ba6c!2m2!1d0.8302196!2d35.9296489!1m0"
            target="_blank"
            className="call"
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
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
