import React, { Component } from "react";
import HighlightCard from "./HighlightCard";
import {
  ProgramHighlightBg,
  ProgramTitle,
  ProgramHighlightCards,
  ApplyButton
} from "./styledComponents";
import { HighlightCardList } from "./HighlightCardContents.js";

class ProgramHighlightSection extends Component {
  HighlightCards = HighlightCardList;
  render() {
    return (
      <ProgramHighlightBg>
        <ProgramTitle>Program Highlights</ProgramTitle>
        <ProgramHighlightCards>
          {this.HighlightCards.map(HighlightItem => (
            <HighlightCard
              src={HighlightItem.src}
              title={HighlightItem.title}
              subTitle={HighlightItem.subTitle}
            />
          ))}
        </ProgramHighlightCards>
        <ApplyButton>Apply Now</ApplyButton>
      </ProgramHighlightBg>
    );
  }
}
export default ProgramHighlightSection;
