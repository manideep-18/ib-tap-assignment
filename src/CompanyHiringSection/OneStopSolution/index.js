import React, { Component } from "react";
import {
  OneStopSolutionBg,
  OneStopSolutionTitle,
  ContentsBg
} from "./styledComponents";
import UpSkill from "./UpSkill";
import OneStopSolutionContents from "./OneStopSolutionContents";

class OneStopSolution extends Component {
  render() {
    return (
      <OneStopSolutionBg>
        <OneStopSolutionTitle>
          One-stop solution for all your talent needs
        </OneStopSolutionTitle>
        <ContentsBg>
          <UpSkill />
          <OneStopSolutionContents />
        </ContentsBg>
      </OneStopSolutionBg>
    );
  }
}
export default OneStopSolution;
