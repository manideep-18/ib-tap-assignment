import React, { Component } from "react";
import {
  LandingPageComponent,
  TapText,
  TapSlogan,
  TapTextSections,
  TapTextStyle,
  TapSloganSection,
  TapInvestSection,
  TapInvestText
} from "./styledComponents";

class LandingPageSection extends Component {
  render() {
    return (
      <LandingPageComponent>
        <TapTextSections>
          <TapTextStyle>
            <TapText>iB HUBS</TapText>
            <TapText>TALENT ACEELERATOR</TapText>
          </TapTextStyle>
          <TapSloganSection>
            <TapSlogan>
              Transforming India from a Land of Potential to a Land of
              Opportunity
            </TapSlogan>
          </TapSloganSection>
        </TapTextSections>
        <TapInvestSection>
          <TapInvestText>We invest in individuals</TapInvestText>
          <TapInvestText>
            to build skills and accelerate their careers
          </TapInvestText>
        </TapInvestSection>
      </LandingPageComponent>
    );
  }
}
export default LandingPageSection;
