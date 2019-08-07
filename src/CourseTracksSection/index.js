import React, { Component } from "react";
import {
  CourseTracksSectionBg,
  CourseTracksSectionTitle,
  CourseTracksListBg
} from "./styledComponents";
import CourseTracksList from "./CourseTracksList";
import { techList } from "./techListSection";
import { managementList } from "./ManagementListSection";
import { CourseTracksListItem } from "./CourseTracksList/styledComponents";

class CourseTracksSection extends Component {
  render() {
    return (
      <CourseTracksSectionBg>
        <CourseTracksSectionTitle>Course Tracks</CourseTracksSectionTitle>
        <CourseTracksListBg>
          <CourseTracksList title="TECH" list={techList} />
          <CourseTracksList title="MANAGEMENT" list={managementList} />
        </CourseTracksListBg>
      </CourseTracksSectionBg>
    );
  }
}
export default CourseTracksSection;
