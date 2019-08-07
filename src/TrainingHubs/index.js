import React, { Component } from "react";
import {
  TrainingHubsBg,
  TrainingHubsTitle,
  TrainingHubsSubTitle
} from "./styledComponents";
import FeaturesSection from "./FeaturesSection";

class TrainingHubs extends Component {
  render() {
    return (
      <TrainingHubsBg>
        <TrainingHubsTitle>State-of-the-Art Training Hubs</TrainingHubsTitle>
        <TrainingHubsSubTitle>
          Global presence to nurture talent beyond boundaries
        </TrainingHubsSubTitle>
        <FeaturesSection />
      </TrainingHubsBg>
    );
  }
}
export default TrainingHubs;
