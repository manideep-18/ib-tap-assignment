import React, { Component } from "react";
import {
  CourseTracksListBg,
  CourseTracksListTitle,
  CourseTracksListContents,
  CourseTracksListItem,
  CourseTracksDot,
  CourseContentBg
} from "./styledComponents";

class CourseTracksList extends Component {
  render() {
    return (
      <CourseTracksListBg>
        <CourseTracksListTitle>{this.props.title}</CourseTracksListTitle>
        <CourseTracksListContents>
          {this.props.list.map(ListItem => (
            <CourseContentBg>
              <CourseTracksDot />
              <CourseTracksListItem>{ListItem.text}</CourseTracksListItem>
            </CourseContentBg>
          ))}
        </CourseTracksListContents>
      </CourseTracksListBg>
    );
  }
}
export default CourseTracksList;
