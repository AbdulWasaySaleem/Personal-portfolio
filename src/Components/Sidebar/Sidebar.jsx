import React, { useState, useEffect } from "react";
import profilePicture from "../../assets/profile-Pic.jpg";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoItem from "./SideBarItem/InfoItem";
import "./Sidebar.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  //Checking if the width of DOM is less than 480
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`sidebar ${isActive ? "active" : ""}`}
      aria-label="User Information Sidebar"
    >
      <button
        className="info_more-btn"
        onClick={toggleSidebar}
        aria-label={isActive ? "Hide contacts" : "Show contacts"}
        aria-expanded={isActive}
      >
        {isMobile ? (
          <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} />
        ) : (
          <span>{isActive ? "Hide Contacts" : "Show Contacts"}</span>
        )}
      </button>

      <section className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={profilePicture}
            alt="Abdul Wasay's profile picture"
            aria-describedby="profile-info"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" id="profile-info">
            Abdul Wasay
          </h1>
          <p className="title">Full Stack Developer</p>
        </div>
      </section>

      <section className="sidebar-info-more">
        <div className="separator" role="separator"></div>

        <InfoItem
          icon={faEnvelope}
          label="Email"
          content="07.abdulwasayy@gmail.com"
          href="mailto:07.abdulwasayy@gmail.com"
        />
        <InfoItem
          icon={faPhone}
          label="Phone"
          content="+92 3112266291"
          href="tel:+923112266291"
        />
        <InfoItem
          icon={faLocationDot}
          label="Location"
          content="Karachi, Pakistan"
        />
      </section>

      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/abdul-wasay-4765b82a6/"
            className="social-link"
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://github.com/AbdulWasaySaleem"
            className="social-link"
            target="_blank"
            aria-label="GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.facebook.com/share/1EBfYTFvUB/"
            className="social-link"
            target="_blank"
            aria-label="Facebook profile"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.instagram.com/14326wasay?igsh=MTlwOWhjNWtybHNjeA=="
            className="social-link"
            target="_blank"
            aria-label="Instagram profile"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
