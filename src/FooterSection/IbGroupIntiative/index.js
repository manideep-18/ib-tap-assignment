import React, { Component } from "react";
import IbGroupIntiativeMediaLinks from "./IbGroupIntiativeMediaLinks";
import { mediaLinksList } from "./MediaLinkList";
import {
  IbGroupIntiativeBg,
  IbGroupIntiativeTitle,
  IbGroupIntiativeImage
} from "./styledComponents";

class IbGroupIntiative extends Component {
  render() {
    return (
      <IbGroupIntiativeBg>
        <IbGroupIntiativeTitle>An initiative of</IbGroupIntiativeTitle>
        <IbGroupIntiativeImage src="/assets/FooterSection/LOGO_final.webp" />
        <IbGroupIntiativeMediaLinks mediaLinks={mediaLinksList} />
      </IbGroupIntiativeBg>
    );
  }
}
export default IbGroupIntiative;
