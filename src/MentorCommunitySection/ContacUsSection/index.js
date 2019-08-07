import React, { Component } from "react";
import {
  ContacUsSectionBg,
  ContacUsSectionTitle,
  DetailsInputTextArea,
  DetailsInputBoxBg
} from "./styledComponents";
import { InputPlaceholderList } from "./InputPlaceholderList";
import DetailsInputBox from "./DetailsInputBox";
import { ApplyButton } from "../../ProgramHighlightSection/styledComponents";

class ContacUsSection extends Component {
  render() {
    return (
      <ContacUsSectionBg>
        <ContacUsSectionTitle>Contact Us</ContacUsSectionTitle>
        <DetailsInputBoxBg>
          {InputPlaceholderList.map(InputPlaceholderItem => (
            <DetailsInputBox placeholder={InputPlaceholderItem.placeholder} />
          ))}
        </DetailsInputBoxBg>
        <DetailsInputTextArea placeholder="Enter Your Query here" />
        <ApplyButton>CONTACT US</ApplyButton>
      </ContacUsSectionBg>
    );
  }
}
export default ContacUsSection;
