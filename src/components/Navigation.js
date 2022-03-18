import React from "react";
import { Link as LinkScroll } from "react-scroll";

export default function Navigation() {
  return (
    <div className="custom-navigation">
      <nav className="container navbar py-0 navbar-expand-lg">
        <div className="display-6 ms-3 ms-md-0 custom-logo">BestShop</div>
        <button
          className="navbar-toggler custom-btn py-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="bg-dark custom-line1"></div>
          <div className="bg-dark custom-line2"></div>
          <div className="bg-dark custom-line3"></div>
        </button>
        <ul
          className="collapse navbar-collapse navbar-nav text-uppercase justify-content-end"
          id="navbarSupportedContent"
        >
          <LinkScroll className="px-4 py-4 custom-nav-link">Why us</LinkScroll>
          <LinkScroll className="px-4 py-4 custom-nav-link">
            Benefits
          </LinkScroll>
          <LinkScroll className="px-4 py-4 custom-nav-link">Prices</LinkScroll>
          <LinkScroll className="px-4 py-4 custom-nav-link">Contact</LinkScroll>
        </ul>
      </nav>
    </div>
  );
}
