import React, { Component } from "react";
import { TapInvestSection, TapInvestText } from "./styledComponents";
class TapInvest extends Component {
  render() {
    return (
      <TapInvestSection>
        <TapInvestText>We invest in individuals</TapInvestText>
        <TapInvestText>
          to build skills and accelerate their careers
        </TapInvestText>
      </TapInvestSection>
    );
  }
}
export default TapInvest;
