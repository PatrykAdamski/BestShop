import React from "react";
import HomeHeader from "./components/HomeHeader";
import HomeStatistics from "./components/HomeStatistics";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="container-fluid gx-0">
      <Navigation></Navigation>
      <HomeHeader></HomeHeader>
      <HomeStatistics></HomeStatistics>
    </div>
  );
}
