
import React from "react";
import logo from "../assets/images/logo.png";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        {/* ABOUT */}
        <div className="footer-about">
          <img
            src={logo}
            alt="Aqua Terra Conservation Initiative"
            className="footer-logo"
          />

          <h2>Aqua Terra Conservation Initiative</h2>

          <p className="footer-slogan">
            Conserving Today, Thriving Tomorrow.
          </p>

          <p>
            We promote environmental conservation, with a focus on protecting
            marine life, preserving aquatic ecosystems, and inspiring
            responsible action for a healthier planet.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/conservation">News & Publications</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
          </ul>
        </div>

        {/* OUR FOCUS */}
        <div className="footer-column">
          <h3>Our Focus</h3>
          <ul>
            <li><a href="/conservation">Marine Life Protection</a></li>
            <li><a href="/conservation">Ocean Habitat Conservation</a></li>
            <li><a href="/conservation">Marine Pollution Prevention</a></li>
            <li><a href="/conservation">Environmental Awareness</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:jeandamascenemuragijimana380@gmail.com">
              jeandamascenemuragijimana380@gmail.com
            </a>
          </p>

          <p>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+250783833434">+250 783 833 434</a>
          </p>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Aqua Terra Conservation Initiative.
          All rights reserved.
        </p>
        <p>Conserving Today, Thriving Tomorrow.</p>
      </div>
    </footer>
  );
};

export default Footer;
