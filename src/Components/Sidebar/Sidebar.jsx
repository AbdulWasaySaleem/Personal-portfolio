import React, { useState, useEffect, useRef } from "react";
import profilePicture from "../../assets/profile-Pic.jpg";
import cvFile from "../../assets/abdulWasay(CV).pdf"; // ⬅️ NEW
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
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking outside (mobile/tablet)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isActive &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isActive) setIsActive(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isActive]);

  return (
    <aside
      ref={sidebarRef}
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
          <span>{isActive ? "Close" : "Open"}</span>
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

          {/* ⬅️ NEW: Download CV Button */}
          <a href={cvFile} download className="download-cv-btn">
            Download CV
          </a>
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
          content="+92 311 2266291"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
