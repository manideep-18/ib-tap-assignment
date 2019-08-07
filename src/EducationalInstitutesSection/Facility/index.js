import React, { Component } from "react";
import { FacilityBg } from "./styledComponents";
import EachFacility from "./EachFacility";
import { FacilityLists } from "./FacilityLists";

class Facility extends Component {
  render() {
    return (
      <FacilityBg>
        {FacilityLists.map(FacilityItem => (
          <EachFacility src={FacilityItem.src} text={FacilityItem.text} />
        ))}
      </FacilityBg>
    );
  }
}
export default Facility;
