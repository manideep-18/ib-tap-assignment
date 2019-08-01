import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TapMainComponent } from "./styledComponents.js";
import TapNavBar from "./TapNavBar";
import LandingPageSection from "./LandingPageSection";

class App extends React.Component {
  render() {
    return (
      <TapMainComponent>
        <TapNavBar />
        <LandingPageSection />
      </TapMainComponent>
    );
  }
}

export default App;
