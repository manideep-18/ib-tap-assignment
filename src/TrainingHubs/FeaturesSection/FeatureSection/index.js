import React, { Component } from "react";
import {
  FeatureSectionBg,
  FeatureSectionTitle,
  FeatureSectionSubTitle
} from "./styledComponents";

class FeatureSection extends Component {
  render() {
    return (
      <FeatureSectionBg center={this.props.center}>
        <FeatureSectionTitle>{this.props.title}</FeatureSectionTitle>
        <FeatureSectionSubTitle>{this.props.subTitle}</FeatureSectionSubTitle>
      </FeatureSectionBg>
    );
  }
}
export default FeatureSection;
