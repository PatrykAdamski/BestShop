import React from "react";

export default function HomeFooter() {
  return (
    <footer className="container-fluid px-2 py-3 custom-footer d-flex flex-column flex-sm-row justify-content-sm-around">
      <div>
        <div className="custom-logo display-6 mb-3">BestShop</div>
        <span className="custom-footer-copyright">
          &copy; 2019 BestShop LTD, All Rights Reserved
        </span>
      </div>
      <div className="d-flex align-self-end me-4">
        <div className="custom-icon-social custom-icon-facebook me-4"></div>
        <div className="custom-icon-social custom-icon-twitter"></div>
      </div>
    </footer>
  );
}
