import React, { Component } from "react";
import {
  ReachUsBg,
  ReachUstext,
  ReachUsTitle,
  ReachUsTextBg,
  ReachUsText
} from "./styledComponents";

class ReachUs extends Component {
  render() {
    return (
      <ReachUsBg>
        <ReachUsTitle>REACH US</ReachUsTitle>
        <ReachUsTextBg>
          <ReachUsText>You can mail us </ReachUsText>
          <ReachUsText>at info@ibhubs.co</ReachUsText>
        </ReachUsTextBg>
      </ReachUsBg>
    );
  }
}
export default ReachUs;
