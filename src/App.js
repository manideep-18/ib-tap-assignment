import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TapMainComponent } from "./styledComponents.js";
import TapNavBar from "./TapNavBar";

class App extends React.Component {
  render() {
    return (
      <TapMainComponent>
        <TapNavBar />
      </TapMainComponent>
    );
  }
}

export default App;
