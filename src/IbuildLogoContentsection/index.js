import React, { Component } from "react";
import {
  IbuildLogo,
  IbuildLogoContentsectionBg,
  IbuildContent
} from "./styledComponents";

class IbuildLogoContentsection extends Component {
  render() {
    return (
      <IbuildLogoContentsectionBg>
        <IbuildLogo src="logo.webp" />
        <IbuildContent>
          iB Hubs is a product of iBuild Innovations India Ltd.
        </IbuildContent>
      </IbuildLogoContentsectionBg>
    );
  }
}
export default IbuildLogoContentsection;
