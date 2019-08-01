import React, { Component } from "react";
import TapContentsText from "../TapContentsText";
import { TapContentsImage } from "../styledComponents";

class TapContentsTextImage extends Component {
  render() {
    return (
      <>
        <TapContentsText text={this.props.text} />
        <TapContentsImage src="downward-arrow-icon.png" />
      </>
    );
  }
}
export default TapContentsTextImage;
