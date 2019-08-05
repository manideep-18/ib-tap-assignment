import React, { Component } from "react";
import {
  CompanyHiringBg,
  CompanyTextTitle,
  BorderImage,
  LetsConnectButton
} from "./styledComponents";
import WhyHireOurGradutes from "./WhyHireOurGradutes";
import OneStopSolution from "./OneStopSolution";

class CompanyHiringSection extends Component {
  render() {
    return (
      <CompanyHiringBg>
        <CompanyTextTitle>For Companies</CompanyTextTitle>
        <WhyHireOurGradutes />
        <BorderImage src="/assets/WHY-HIRE-OUR-GRADUATES/Oval.webp" />
        <OneStopSolution />
        <LetsConnectButton>LET'S CONNECT</LetsConnectButton>
      </CompanyHiringBg>
    );
  }
}
export default CompanyHiringSection;
