import React, { Component } from "react";
import { TapContentsTextSection, TapContentStyle } from "./styledComponents";

class TapContentsText extends Component {
  render() {
    return (
      <>
        {this.props.primary ? (
          <TapContentStyle>
            <TapContentsTextSection primary={this.props.primary}>
              {this.props.text}
            </TapContentsTextSection>
          </TapContentStyle>
        ) : (
          <TapContentsTextSection>{this.props.text}</TapContentsTextSection>
        )}
      </>
    );
  }
}
export default TapContentsText;
