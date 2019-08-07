import React, { Component } from "react";
import { FrameWorkBg } from "./styledComponents";
import EachFrameWork from "./EachFrameWork";
import { FrameWorkLists } from "./FrameWorkLists";

class FrameWorkSection extends Component {
  render() {
    return (
      <FrameWorkBg>
        {FrameWorkLists.map(FrameWorkItem => (
          <EachFrameWork
            src={FrameWorkItem.src}
            infoTitle={FrameWorkItem.infoTitle}
            subTitle={FrameWorkItem.subTitle}
          />
        ))}
      </FrameWorkBg>
    );
  }
}
export default FrameWorkSection;
