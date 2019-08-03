import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  TapMainComponent,
  TapSectionWrapper,
  TapSectionWrapperEven,
  TapSectionWrapperWho
} from "./styledComponents.js";
import TapNavBar from "./TapNavBar";
import LandingPageSection from "./LandingPageSection";
import ProgramHighlightSection from "./ProgramHighlightSection";
import CCPBSection from "./CCPBSection";
import WhoCanApplySection from "./WhoCanApplySection";

class App extends React.Component {
  render() {
    return (
      <TapMainComponent>
        <TapNavBar />
        <LandingPageSection />
        <TapSectionWrapper>
          <ProgramHighlightSection />
        </TapSectionWrapper>
        <TapSectionWrapperEven>
          <CCPBSection />
        </TapSectionWrapperEven>
        <TapSectionWrapperWho>
          <WhoCanApplySection />
        </TapSectionWrapperWho>
      </TapMainComponent>
    );
  }
}

export default App;
