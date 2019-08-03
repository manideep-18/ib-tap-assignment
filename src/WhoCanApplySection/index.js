import React, { Component } from "react";
import { ApplicantLists } from "./ApplicantList.js";
import {
  WhoCanApplyBg,
  WhoTitle,
  WhoSubTitle,
  ApplicantListSection,
  ApplyButtonWho
} from "./styledComponents.js";
import ApplicantSection from "./ApplicantSection/index.js";
import { ApplyButton } from "../ProgramHighlightSection/styledComponents.js";

class WhoCanApplySection extends Component {
  ApplicantList = ApplicantLists;
  render() {
    return (
      <WhoCanApplyBg>
        <WhoTitle>Who can apply?</WhoTitle>
        <WhoSubTitle>
          Enthusiasts from 10 years to 36 years of age can apply
        </WhoSubTitle>
        <ApplicantListSection>
          {this.ApplicantList.map(ApplicationItem => (
            <ApplicantSection
              src={ApplicationItem.src}
              title={ApplicationItem.title}
            />
          ))}
        </ApplicantListSection>
        <ApplyButtonWho>Apply Now</ApplyButtonWho>
      </WhoCanApplyBg>
    );
  }
}
export default WhoCanApplySection;
