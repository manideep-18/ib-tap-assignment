import React, { Component } from "react";
import {
  OneStopSolutionContentBg,
  OneStopSolutionContentTitle,
  OneStopSolutionContentSubTitle
} from "./styledComponents";

class OneStopSolutionContent extends Component {
  render() {
    return (
      <OneStopSolutionContentBg>
        <OneStopSolutionContentTitle>
          {this.props.title}
        </OneStopSolutionContentTitle>
        <OneStopSolutionContentSubTitle>
          {this.props.subTitle}
        </OneStopSolutionContentSubTitle>
      </OneStopSolutionContentBg>
    );
  }
}
export default OneStopSolutionContent;
