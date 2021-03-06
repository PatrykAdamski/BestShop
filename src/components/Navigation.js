import React from "react";
import { Link as LinkScroll } from "react-scroll";

export default function Navigation() {
  return (
    <div className="custom-navigation fixed-top bg-white">
      <nav className="container navbar py-0 navbar-expand-lg">
        <div className="display-6 ms-3 ms-md-0 custom-logo">BestShop</div>
        <button
          className="navbar-toggler custom-btn py-4 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="custom-line1"></div>
          <div className="custom-line2"></div>
          <div className="custom-line3"></div>
        </button>
        <ul
          className="collapse navbar-collapse navbar-nav text-uppercase justify-content-end bg-white"
          id="navbarSupportedContent"
        >
          <LinkScroll
            to="HomeHeader"
            duration={250}
            spy={true}
            smooth={true}
            className="px-4 py-4 custom-nav-link"
          >
            Start
          </LinkScroll>
          <LinkScroll
            to="HomeBenefits"
            duration={250}
            spy={true}
            smooth={true}
            className="px-4 py-4 custom-nav-link"
          >
            Benefits
          </LinkScroll>
          <LinkScroll
            to="HomePricing"
            duration={250}
            spy={true}
            smooth={true}
            className="px-4 py-4 custom-nav-link"
          >
            Prices
          </LinkScroll>
          <LinkScroll
            to="HomeCalculator"
            duration={250}
            spy={true}
            smooth={true}
            className="px-4 py-4 custom-nav-link"
          >
            Calculator
          </LinkScroll>
          <LinkScroll
            to="HomeContact"
            duration={250}
            spy={true}
            smooth={true}
            className="px-4 py-4 custom-nav-link"
          >
            Contact
          </LinkScroll>
        </ul>
      </nav>
    </div>
  );
}
