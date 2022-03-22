import React from "react";
import imageMacbook from "../assets/Macbook.png";
import imageIphone from "../assets/iPhone.png";

export default function HomeBenefits() {
  return (
    <section className="custom-benefits p-3 p-sm-5">
      <div className="container">
        <div className="bg-white p-2 p-sm-5 my-5 d-flex flex-column align-items-start flex-lg-row-reverse justify-content-lg-between align-items-lg-center">
          <div className=" custom-container-macbook position-relative mt-5 align-self-center">
            <img
              src={imageMacbook}
              alt="Macbook..."
              className="custom-image-macbook img-fluid position-relative"
            ></img>
          </div>
          <div className="custom-container-benefit">
            <h3 className="m-4">Be always first</h3>
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="bg-white p-2 p-sm-5 my-5 d-flex flex-column align-items-start flex-lg-row justify-content-lg-between align-items-lg-center">
          <div className=" custom-container-iphone position-relative mt-5 align-self-center">
            <img
              src={imageIphone}
              alt="imageIphone"
              className="custom-image-iphone img-fluid position-relative"
            ></img>
          </div>
          <div className="custom-container-benefit">
            <h3 className="m-4">Your shop is where you are!</h3>
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="custom-container-benefit-trumpet d-lg-flex flex-lg-row align-items-lg-center">
          <div className="bg-white p-3 my-5 my-lg-0 mb-0 d-lg-flex flex-lg-column justify-content-lg-center  custom-container-benefit-trumpet">
            <h3 className="m-4">Increase recognition your brand!</h3>
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="custom-container-trumpet position-relative ms-lg-5"></div>
        </div>
      </div>
    </section>
  );
}
