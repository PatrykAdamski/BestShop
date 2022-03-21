import React from "react";
import imageEye from "../assets/Eye.svg";
import imagePerson from "../assets/Person.svg";
import imageCatalog from "../assets/Catalog.svg";

export default function HomeStatistics() {
  return (
    <section className="container mt-5 d-flex flex-column align-items-center">
      <h2 className="text-center fw-normal mx-4">
        The most popular sales platform in country
      </h2>
      <div className="my-5 d-lg-flex justify-content-evenly w-100">
        <div className="d-flex flex-column align-items-center">
          <div className="custom-circle custom-circle-red position-relative">
            <img
              src={imagePerson}
              alt="person..."
              className="position-absolute top-50 start-100 translate-middle"
            ></img>
          </div>
          <h3 className="my-3 fw-bold">100000+</h3>
          <p className="fw-light">daily entries</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="custom-circle custom-circle-blue position-relative">
            <img
              src={imageEye}
              alt="eye..."
              className="position-absolute top-50 start-100 translate-middle"
            ></img>
          </div>
          <h3 className="my-3 fw-bold">2000000+</h3>
          <p className="fw-light">seen products every day</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="custom-circle custom-circle-green position-relative">
            <img
              src={imageCatalog}
              alt="catalog..."
              className="position-absolute top-50 start-100 translate-middle"
            ></img>
          </div>
          <h3 className="my-3 fw-bold">10000+</h3>
          <p className="fw-light">added posts daily</p>
        </div>
      </div>
    </section>
  );
}
