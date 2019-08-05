import React, { Component } from "react";
import { exportDefaultDeclaration } from "@babel/types";
import { OneSolutionFeatures } from "./OneSolutionFeatures";
import OneStopSolutionContent from "./OneStopSolutionContent";

class OneStopSolutionContents extends Component {
  OneStopSolutionContentList = OneSolutionFeatures;
  render() {
    return (
      <OneStopSolutionContentsBg>
        {this.OneStopSolutionContentList.map(EachContent => (
          <OneStopSolutionContent
            title={EachContent.title}
            subTitle={EachContent.subTitle}
          />
        ))}
      </OneStopSolutionContentsBg>
    );
  }
}
export default OneStopSolutionContents;
