import React, { Component } from "react";
import { IbGroupIntiativeMediaLinksBg, MediaLinkImg } from "./styledComponents";

class IbGroupIntiativeMediaLinks extends Component {
  render() {
    return (
      <IbGroupIntiativeMediaLinksBg>
        {this.props.mediaLinks.map(mediaLink => (
          <MediaLinkImg src={mediaLink.src} />
        ))}
      </IbGroupIntiativeMediaLinksBg>
    );
  }
}
export default IbGroupIntiativeMediaLinks;
