import React, { Component } from "react";
import {
  LandingPageComponent,
  TapText,
  TapSlogan,
  TapTextSections,
  TapTextStyle,
  TapSloganSection
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
      </LandingPageComponent>
    );
  }
}
export default LandingPageSection;
