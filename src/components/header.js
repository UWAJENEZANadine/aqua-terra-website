
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const renderDropdown = (name, label, href, items) => (
    <div
      className={`nav-dropdown ${
        openDropdown === name ? "dropdown-open" : ""
      }`}
      key={name}
    >
      <div className="nav-dropdown-heading">
        <a href={href} onClick={closeMenu}>
          {label}
        </a>

        <button
          type="button"
          className="dropdown-toggle"
          aria-label={`Toggle ${label} submenu`}
          aria-expanded={openDropdown === name}
          onClick={() => toggleDropdown(name)}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>

      <div className="dropdown-menu">
        {items.map((item) => (
          <a href={item.href} key={item.label} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <header className="main-header">
      <div className="header-inner">

        {/* Organization Logo */}
        <a href="/" className="brand-logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="Aqua Terra Conservation Initiative"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setOpenDropdown(null);
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Main Navigation */}
        <nav className={`nav-container ${menuOpen ? "active" : ""}`}>

          <a href="/" onClick={closeMenu} className="nav-link">
            Home
          </a>

          {renderDropdown("about", "About Us", "/about-us", [
            { label: "Who We Are", href: "/about-us#who-we-are" },
            { label: "Mission and Vision", href: "/about-us#mission-vision" },
            { label: "Our Objectives", href: "/about-us#objectives" },
          ])}

          {renderDropdown("work", "Our Work", "/our-work", [
            {
              label: "Environmental Conservation",
              href: "/our-work#environmental-conservation",
            },
            {
              label: "Biodiversity Protection",
              href: "/our-work#biodiversity-protection",
            },
            {
              label: "Ecosystem Restoration",
              href: "/our-work#ecosystem-restoration",
            },
          ])}


          {renderDropdown("news", "News & Publications", "/news", [
            { label: "Latest News", href: "/news#latest-news" },
            { label: "Publications", href: "/news#publications" },
          ])}

          {renderDropdown("involved", "Get Involved", "/get-involved", [
            { label: "Become a Volunteer", href: "/get-involved#volunteer" },
            { label: "Become a Partner", href: "/get-involved#partner" },
            { label: "Donate", href: "/get-involved#donate" },
          ])}

        </nav>
      </div>
    </header>
  );
};

export default Header;
