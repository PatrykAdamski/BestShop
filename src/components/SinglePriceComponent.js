import React from "react";
import checkmark from "../assets/Checkmark-1.svg";
import close from "../assets/Close.svg";

export default function SinglePriceComponent(props) {
  const {
    title,
    price,
    isLimitedOffer,
    howMuchSpace,
    subdomain,
    emails,
    license,
    isLicense,
    isFullSupport,
    classNameElementColor,
  } = props;

  return (
    <div className="custom-container-element">
      <div className={classNameElementColor}>
        <div className="d-flex flex-column justify-content-center align-items-sm-center mb-4">
          <h3 className="fw-bold text-center">{title}</h3>
          <span className="display-1 custom-text-price">$ {price}</span>
          {isLimitedOffer ? <span>Limited offer</span> : <span></span>}
        </div>
        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-sm-center mb-2">
            <img src={checkmark} alt="checkmark" className="img-fluid"></img>
            <p className="mb-0 ms-2">{howMuchSpace}</p>
          </div>
          <div className="d-flex align-items-center justify-content-sm-center mb-2">
            <img src={checkmark} alt="checkmark" className="img-fluid"></img>
            <p className="mb-0 ms-2">{subdomain}</p>
          </div>
          <div className="d-flex align-items-center justify-content-sm-center mb-2">
            <img src={checkmark} alt="checkmark" className="img-fluid"></img>
            <p className="mb-0 ms-2">{emails}</p>
          </div>
          <div className="d-flex align-items-center justify-content-sm-center mb-2">
            {isLicense ? (
              <img src={checkmark} alt="checkmark" className="img-fluid"></img>
            ) : (
              <img src={close} alt="checkmark" className="img-fluid"></img>
            )}

            <p className="mb-0 ms-2">{license}</p>
          </div>
          <div className="d-flex align-items-center justify-content-sm-center mb-2">
            {isFullSupport ? (
              <img src={checkmark} alt="checkmark" className="img-fluid"></img>
            ) : (
              <img src={close} alt="checkmark" className="img-fluid"></img>
            )}
            <p className="mb-0 ms-2">Full support</p>
          </div>
        </div>
        <button className="custom-btn custom-btn-red position-absolute top-100 start-50 translate-middle">
          Begin
        </button>
      </div>
    </div>
  );
}
