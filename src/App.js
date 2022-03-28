import React from "react";
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
      <HomeHeader></HomeHeader>
      <HomeStatistics></HomeStatistics>
      <HomeBenefits></HomeBenefits>
      <HomePricing></HomePricing>
      <Calculator></Calculator>
      <HomeContact></HomeContact>
      <HomeFooter></HomeFooter>
    </div>
  );
}
