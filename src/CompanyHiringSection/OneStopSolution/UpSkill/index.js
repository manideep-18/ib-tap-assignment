import React, { Component } from "react";
import {
  UpSkillBg,
  UpSkillImg,
  UpSkillTitle,
  UpSkillDescription
} from "./styledComponents";

class UpSkill extends Component {
  render() {
    return (
      <UpSkillBg>
        <UpSkillImg src="/assets/WHY-HIRE-OUR-GRADUATES/upskilling-existing-employees.svg" />
        <UpSkillTitle>Upskill Existing Employees</UpSkillTitle>
        <UpSkillDescription>
          A continuous outcome-based learning program creating real impact
        </UpSkillDescription>
        <UpSkillDescription>
          Gamified experience that encourages pro-active learning
        </UpSkillDescription>
        <UpSkillDescription>
          Contextual content designed to meet your on-demand needs
        </UpSkillDescription>
        <UpSkillDescription>
          Flexible training schedules; option for intensive residential program
          as well
        </UpSkillDescription>
      </UpSkillBg>
    );
  }
}
export default UpSkill;
