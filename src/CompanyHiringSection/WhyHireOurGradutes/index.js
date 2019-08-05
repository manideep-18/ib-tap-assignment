import React, { Component } from "react";
import {
  WhyHireOurGradutesBg,
  WhyHireOurGradutesTitle,
  WhyHireOurGradutesSubTiltle,
  CompanyAdvantagesBg
} from "./styledComponents";
import CompanyAdvantage from "./CompanyAdvantage";
import { CompanyAdvatanges } from "./CompanyAdvantageList";
class WhyHireOurGradutes extends Component {
  CompanyAdvatangeList = CompanyAdvatanges;
  render() {
    return (
      <WhyHireOurGradutesBg>
        <WhyHireOurGradutesTitle>
          WHY HIRE OUR GRADUATES?
        </WhyHireOurGradutesTitle>
        <WhyHireOurGradutesSubTiltle>
          High quality, ready-to-interview and ready-to-work graduates
        </WhyHireOurGradutesSubTiltle>
        <CompanyAdvantagesBg>
          {this.CompanyAdvatangeList.map(Advantage => (
            <CompanyAdvantage src={Advantage.src} title={Advantage.title} />
          ))}
        </CompanyAdvantagesBg>
      </WhyHireOurGradutesBg>
    );
  }
}
export default WhyHireOurGradutes;
