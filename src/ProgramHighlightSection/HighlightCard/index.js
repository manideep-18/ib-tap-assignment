import React, { Component } from "react";
import {
  HighlightCardBg,
  LogoImg,
  Title,
  SubTitle,
  HighlightTitleBg
} from "./styledComponents";

class HighlightCard extends Component {
  render() {
    return (
      <HighlightCardBg>
        <LogoImg src={this.props.src} />
        <HighlightTitleBg>
          <Title>{this.props.title}</Title>
          <SubTitle>{this.props.subTitle}</SubTitle>
        </HighlightTitleBg>
      </HighlightCardBg>
    );
  }
}
export default HighlightCard;
