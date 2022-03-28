import React from "react";
import mailIcon from "../assets/Mail Icon.svg";
import phoneIcon from "../assets/Phone Icon.svg";

export default function HomeContact() {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container p-3">
      <div className="d-lg-flex justify-content-evenly">
        <div>
          <div>
            <h2 className="display-2 fw-normal">Any questions?</h2>
            <p className="fs-5">Leave your email address or call us!</p>
          </div>
          <div className="d-lg-flex">
            <div className="d-flex align-items-center mb-2 mb-lg-0">
              <img src={mailIcon} alt="mail icon..."></img>
              <p className="mb-0 ms-3 custom-contact-text">info@bestshop.xyz</p>
            </div>
            <div className="d-flex align-items-center ms-lg-3">
              <img src={phoneIcon} alt="phone icon..."></img>
              <p className="mb-0 ms-3 custom-contact-text">123 412 123</p>
            </div>
          </div>
        </div>
        <form className="mt-5 d-flex flex-column custom-form">
          <label className="text-uppercase d-flex flex-column custom-form-text">
            Name
            <input
              className="custom-form-input mb-3"
              type="text"
              id="username"
            ></input>
          </label>
          <label className="text-uppercase d-flex flex-column custom-form-text">
            Email
            <input
              className="custom-form-input mb-3"
              type="email"
              id="email"
            ></input>
          </label>
          <div className="d-flex mt-4">
            <input id="agreement" type="checkbox"></input>
            <label htmlFor="agreement" className="custom-form-checkbox"></label>
            <span className="custom-contact-text ms-3 mb-3">
              I hereby give consent for my personal data included in my
              application to be processed for the purposes of the recruitment
              process under the European Parliament’s and Council of the
              European Union Regulation on the Protection of Natural Persons as
              of 27 April 2016, with regard to the processing of personal data
              and on the free movement of such data, and repealing Directive
              95/46/EC (Data Protection Directive)
            </span>
          </div>
          <button
            onClick={formSubmit}
            className="custom-btn custom-btn-blue align-self-end"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
