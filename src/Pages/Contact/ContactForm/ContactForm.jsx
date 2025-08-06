import React, { useState } from "react";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const isFormValid =
      formData.fullname.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.message.trim() !== "";
    setIsValid(isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Form submitted:", formData);
      setFormData({ fullname: "", email: "", message: "" });
      setIsValid(false);
      navigate("/")
    }
  };

  return (
    <section className="contact-form">
      <h3 className="form-title">Contact Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="form-btn" type="submit" disabled={!isValid}>
          <FontAwesomeIcon icon={faPaperPlane} />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
