import React, { Component } from "react";
import {
  ApplicantSectionBg,
  ApplicantImg,
  ApplicantTitle
} from "./styledComponents";
class ApplicantSection extends Component {
  render() {
    return (
      <ApplicantSectionBg>
        <ApplicantImg src={this.props.src} />
        <ApplicantTitle>{this.props.title}</ApplicantTitle>
      </ApplicantSectionBg>
    );
  }
}
export default ApplicantSection;
