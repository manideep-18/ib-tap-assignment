import React, { Component } from "react";
import Subscribe from "./Subscribe";
import Address from "./Address";
import { SubscribeAddressBg, DivisonBg } from "./styledComponents";

class SubscribeAddress extends Component {
  render() {
    return (
      <SubscribeAddressBg>
        <Subscribe />
        <DivisonBg />
        <Address />
      </SubscribeAddressBg>
    );
  }
}
export default SubscribeAddress;
