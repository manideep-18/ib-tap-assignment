import React, { Component } from "react";
import { LetsConnectButton } from "../CompanyHiringSection/styledComponents";
import {
  EducationalInstitutesSectionBg,
  EducationalInstitutesSectionTitle,
  EducationalInstitutesSectionSubTitle
} from "./styledComponents";
import Facility from "./Facility";

class EducationalInstitutesSection extends Component {
  render() {
    return (
      <EducationalInstitutesSectionBg>
        <EducationalInstitutesSectionTitle>
          For Educational Institutes
        </EducationalInstitutesSectionTitle>
        <EducationalInstitutesSectionSubTitle>
          Empower your students with industry-relevant skills and present them
          with incredible employment opportunities at zero fee
        </EducationalInstitutesSectionSubTitle>
        <Facility />
        <LetsConnectButton>LET'S CONNECT</LetsConnectButton>
      </EducationalInstitutesSectionBg>
    );
  }
}
export default EducationalInstitutesSection;
