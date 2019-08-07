import React, { Component } from "react";
import {
  EachFacilityBg,
  EachFacilityImg,
  EachFacilityText
} from "./styledComponents";

class EachFacility extends Component {
  render() {
    return (
      <EachFacilityBg>
        <EachFacilityImg src={this.props.src} />
        <EachFacilityText>{this.props.text}</EachFacilityText>
      </EachFacilityBg>
    );
  }
}
export default EachFacility;
