import React from "react";
import HomeHeader from "./components/HomeHeader";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="container-fluid gx-0">
      <Navigation></Navigation>
      <HomeHeader></HomeHeader>
    </div>
  );
}
