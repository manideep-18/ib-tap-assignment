import React, { Component } from "react";
import { CompanyReachUsBg } from "./styledComponents";
import Company from "./Company";
import ReachUs from "./ReachUs";

class CompanyReacUs extends Component {
  render() {
    return (
      <CompanyReachUsBg>
        <Company />
        <ReachUs />
      </CompanyReachUsBg>
    );
  }
}
export default CompanyReacUs;
