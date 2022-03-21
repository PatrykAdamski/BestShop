import React from "react";

export default function HomeHeader() {
  return (
    <header className="vh-100 d-flex flex-column">
      <div className="container h-50 d-flex align-items-end justify-content-center">
        <div className="d-flex flex-column align-items-center mx-3">
          <h1 className="fw-normal fs-1">Sell More!</h1>
          <p className="text-center mt-3">
            Open shop on our platform and increase your sales
          </p>
          <button className="custom-btn custom-btn-blue w-100 mt-3">
            Open your shop
          </button>
        </div>
      </div>
      <div className="img-fluid h-50 custom-headerBackground"></div>
    </header>
  );
}
