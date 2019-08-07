import React, { Component } from "react";
import {
  MentorCommunitySectionBg,
  MentorCommunitySectionTitle,
  MentorCommunitySectionSubTitle,
  MentorCommunitySectionSubTitlesBg,
  ManyMoreText,
  MentorCommunityBorderImage
} from "./styledComponents";
import MentorCommunityImagesSection from "./MentorCommunityImagesSection";
import { CommunityImages } from "./CommunityImages";
import { BorderImage } from "../CompanyHiringSection/styledComponents";
import ContacUsSection from "./ContacUsSection";

class MentorCommunitySection extends Component {
  render() {
    return (
      <>
        <MentorCommunitySectionBg>
          <MentorCommunitySectionTitle>
            Mentor Community
          </MentorCommunitySectionTitle>
          <MentorCommunitySectionSubTitlesBg>
            <MentorCommunitySectionSubTitle>
              Our mentor community strongly believes in the power of sharing!
            </MentorCommunitySectionSubTitle>
            <MentorCommunitySectionSubTitle>
              We collaborate with experts from great companies to guide you on
              this exciting journey.
            </MentorCommunitySectionSubTitle>
          </MentorCommunitySectionSubTitlesBg>
          <MentorCommunityImagesSection images={CommunityImages} />
          <ManyMoreText>and many more...</ManyMoreText>
          <MentorCommunityBorderImage src="/assets/WHY-HIRE-OUR-GRADUATES/Oval.webp" />
          <ContacUsSection />
        </MentorCommunitySectionBg>
      </>
    );
  }
}
export default MentorCommunitySection;
