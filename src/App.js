import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  TapMainComponent,
  TapSectionWrapper,
  TapSectionWrapperEven,
  TapSectionWrapperWho,
  SectionWrapperGrey,
  SectionWrapperDefault,
  TapSectionFooter
} from "./styledComponents.js";
import TapNavBar from "./TapNavBar";
import LandingPageSection from "./LandingPageSection";
import ProgramHighlightSection from "./ProgramHighlightSection";
import CCPBSection from "./CCPBSection";
import WhoCanApplySection from "./WhoCanApplySection";
import CompanyHiringSection from "./CompanyHiringSection";
import EducationalInstitutesSection from "./EducationalInstitutesSection";
import FrameWorksSection from "./FrameWorksSection";
import TrainingHubs from "./TrainingHubs";
import CourseTracksSection from "./CourseTracksSection";
import MentorCommunitySection from "./MentorCommunitySection";
import IbuildLogoContentsection from "./IbuildLogoContentsection";
import FooterSection from "./FooterSection";

class App extends React.Component {
  render() {
    return (
      <TapMainComponent>
        <TapNavBar />
        <LandingPageSection />
        <TapSectionWrapper>
          <ProgramHighlightSection />
        </TapSectionWrapper>
        <TapSectionWrapperEven>
          <CCPBSection />
        </TapSectionWrapperEven>
        <TapSectionWrapperWho>
          <WhoCanApplySection />
        </TapSectionWrapperWho>
        <SectionWrapperGrey>
          <CompanyHiringSection />
        </SectionWrapperGrey>
        <SectionWrapperDefault>
          <EducationalInstitutesSection />
        </SectionWrapperDefault>
        <TapSectionWrapperEven>
          <FrameWorksSection />
        </TapSectionWrapperEven>
        <SectionWrapperDefault>
          <TrainingHubs />
        </SectionWrapperDefault>
        <TapSectionWrapperEven>
          <CourseTracksSection />
        </TapSectionWrapperEven>
        <TapSectionWrapperWho>
          <MentorCommunitySection />
        </TapSectionWrapperWho>
        <TapSectionWrapper>
          <MentorCommunitySection />
        </TapSectionWrapper>
        <SectionWrapperDefault>
          <IbuildLogoContentsection />
        </SectionWrapperDefault>
        <TapSectionFooter>
          <FooterSection />
        </TapSectionFooter>
      </TapMainComponent>
    );
  }
}

export default App;
