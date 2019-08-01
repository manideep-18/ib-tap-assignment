import React, { Component } from "react";
import {
  TapNavBarSection,
  IbLogoImage,
  TapContentsSection,
  TapContentsImage,
  TouchButton,
  IbLogoSection,
  TouchButtonSection,
  TapContentTalent,
  TapMenuSection,
  TapMenuIcon
} from "./styledComponents.js";
import TapContentsText from "./TapContentsText/index.js";
import TapContentsTextImage from "./TapContentsTextImage/index.js";

class TapNavBar extends Component {
  render() {
    return (
      <TapNavBarSection>
        <IbLogoSection>
          <IbLogoImage src="iBhubs_logo.svg" />
        </IbLogoSection>
        <TapContentsSection>
          <TapContentsText text="Home" />
          <TapContentsTextImage text="About Us" />
          <TapContentsText text="Mentor" />
          <TapContentsText primary={true} text="Talent Accelator" />
          <TapContentsText text="Startups" />
          <TapContentsTextImage text="Program" />
          <TapContentsText text="Events" />
          <TapContentsText text="Careers" />
        </TapContentsSection>
        <TouchButtonSection>
          <TouchButton>Stay in Touch</TouchButton>
        </TouchButtonSection>
        <TapMenuSection>
          <TapMenuIcon src="menu.png" />
        </TapMenuSection>
      </TapNavBarSection>
    );
  }
}
export default TapNavBar;
