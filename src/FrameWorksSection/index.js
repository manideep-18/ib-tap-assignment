import React, { Component } from "react";
import {
  FrameWorksSectionBg,
  FrameWorksSectionTitle,
  FrameWorksSectionSubTitle,
  FrameWorkAlign
} from "./styledComponents";
import FrameWork from "./FrameWorkSection";
import FrameWorkSection from "./FrameWorkSection";

class FrameWorksSection extends Component {
  render() {
    return (
      <FrameWorksSectionBg>
        <FrameWorksSectionTitle>
          High-Performance Frameworks & Assessments
        </FrameWorksSectionTitle>
        <FrameWorksSectionSubTitle>
          Drive your performance by building personal and professional
          competencies through our high-impact frameworks and assessments
        </FrameWorksSectionSubTitle>
        <FrameWorkSection />
      </FrameWorksSectionBg>
    );
  }
}
export default FrameWorksSection;
