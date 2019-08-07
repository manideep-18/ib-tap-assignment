import React, { Component } from "react";
import { FeaturesSectionBg } from "./styledComponents";
import { FeaturesList } from "./FeaturesListSection";
import FeatureSection from "./FeatureSection";

class FeaturesSection extends Component {
  render() {
    return (
      <FeaturesSectionBg>
        {FeaturesList.map(FeatureItem => (
          <FeatureSection
            title={FeatureItem.title}
            center={FeatureItem.center}
            subTitle={FeatureItem.subTitle}
          />
        ))}
      </FeaturesSectionBg>
    );
  }
}
export default FeaturesSection;
