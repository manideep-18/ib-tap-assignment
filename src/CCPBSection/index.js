import React, { Component } from "react";
import {
  CCPBSectionBg,
  CCPBAbbrText,
  CCPBImage,
  CCPBText,
  CCPBSubText,
  CCPBSubSection,
  CCPBTextSection
} from "./styledComponents";

class CCPBSection extends Component {
  render() {
    return (
      <CCPBSectionBg>
        <CCPBAbbrText>Continuous Capacity Building Program (CCBP)</CCPBAbbrText>
        <CCPBSubSection>
          <CCPBImage src="ccbp-graph.webp" />
          <CCPBTextSection>
            <CCPBText> CCBP is your lifetime personal coach!</CCPBText>
            <CCPBSubText>
              Your journey towards a bright career starts with this program.
              Throughout the program, we handhold you continuously, so that you
              can reach higher levels in your career.
            </CCPBSubText>
            <CCPBSubText>
              Depending on the level you are in, your training would be
              completely customised. With the training, you will progress module
              by module in each CCBP level at your own pace.
            </CCPBSubText>
            <CCPBSubText>
              In adjacent graph, you can see the eligible packages at each CCBP
              level. For example, if you are at CCBP Level 5, you would be
              eligible for an annual package of INR 18 - 30 Lakhs.
            </CCPBSubText>
          </CCPBTextSection>
        </CCPBSubSection>
      </CCPBSectionBg>
    );
  }
}
export default CCPBSection;
