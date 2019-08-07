import React, { Component } from "react";
import { FooterSectionBg } from "./styledComponents";
import IbGroupIntiative from "./IbGroupIntiative";
import SubscribeAddress from "./SubscribeAddress";
import CompanyReachUs from "./CompanyReachUs";

class FooterSection extends Component {
  render() {
    return (
      <FooterSectionBg>
        <IbGroupIntiative />
        <SubscribeAddress />
        <CompanyReachUs />
      </FooterSectionBg>
    );
  }
}
export default FooterSection;
