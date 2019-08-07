import React, { Component } from "react";
import { MentorCommunityImagesSectionBg, EachImage } from "./styledComponents";

class MentorCommunityImagesSection extends Component {
  render() {
    return (
      <MentorCommunityImagesSectionBg>
        {this.props.images.map(ImageItem => (
          <EachImage src={ImageItem.src} status={ImageItem.status} />
        ))}
      </MentorCommunityImagesSectionBg>
    );
  }
}
export default MentorCommunityImagesSection;
