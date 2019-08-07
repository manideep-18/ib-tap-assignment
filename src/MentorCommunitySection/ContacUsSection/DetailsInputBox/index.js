import React, { Component } from "react";
import { DetailsInputBg, DetailsInputBoxBg, InputBg } from "./styledComponents";

class DetailsInputBox extends Component {
  render() {
    return (
      <InputBg>
        <DetailsInputBg type="text" placeholder={this.props.placeholder} />
      </InputBg>
    );
  }
}
export default DetailsInputBox;
