import React, { Component } from "react";
import {
  CompanyAdvantageBg,
  AdvantageImg,
  AdvantageText
} from "./styledComponents";

class CompanyAdvantage extends Component {
  render() {
    return (
      <CompanyAdvantageBg>
        <AdvantageImg src={this.props.src} />
        <AdvantageText>{this.props.title}</AdvantageText>
      </CompanyAdvantageBg>
    );
  }
}
export default CompanyAdvantage;
