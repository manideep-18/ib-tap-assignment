import React, { Component } from "react";
import {
  EachFrameWorkBg,
  EachFrameWorkTitle,
  EachFrameWorkInfoTitle,
  EachFrameWorkSubTitle,
  EachFrameWorkImg
} from "./styledComponents";

class EachFrameWork extends Component {
  render() {
    return (
      <EachFrameWorkBg>
        <EachFrameWorkImg src={this.props.src} />
        <EachFrameWorkInfoTitle infoTitle={this.props.infoTitle}>
          {this.props.infoTitle}
        </EachFrameWorkInfoTitle>
        <EachFrameWorkSubTitle>{this.props.subTitle}</EachFrameWorkSubTitle>
      </EachFrameWorkBg>
    );
  }
}
export default EachFrameWork;
