import React, { Component } from "react";
import {
  SubscribeBg,
  SubscribeTitle,
  SubscribeInputButtonBg,
  SubscribeInput,
  SubscribeButton
} from "./styledComponents";

class Subscribe extends Component {
  render() {
    return (
      <SubscribeBg>
        <SubscribeTitle>SUBSCRIBE NOW</SubscribeTitle>
        <SubscribeInputButtonBg>
          <SubscribeInput type="text" placeholder="Enter Email Id" />
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </SubscribeInputButtonBg>
      </SubscribeBg>
    );
  }
}
export default Subscribe;
