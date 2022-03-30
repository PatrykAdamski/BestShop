import React from "react";
import { Element } from "react-scroll/modules";
import Calculator from "./components/Calculator";
import HomeBenefits from "./components/HomeBenefits";
import HomeContact from "./components/HomeContact";
import HomeFooter from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";
import HomePricing from "./components/HomePricing";
import HomeStatistics from "./components/HomeStatistics";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="container-fluid gx-0">
      <Navigation></Navigation>

      <Element name="HomeHeader">
        <HomeHeader></HomeHeader>
      </Element>

      <HomeStatistics></HomeStatistics>

      <Element name="HomeBenefits">
        <HomeBenefits></HomeBenefits>
      </Element>

      <Element name="HomePricing">
        <HomePricing></HomePricing>
      </Element>

      <Element name="HomeCalculator">
        <Calculator></Calculator>
      </Element>

      <Element name="HomeContact">
        <HomeContact></HomeContact>
      </Element>

      <HomeFooter></HomeFooter>
    </div>
  );
}
