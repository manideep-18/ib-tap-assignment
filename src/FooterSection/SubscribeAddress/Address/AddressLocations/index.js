import React, { Component } from "react";
import {
  AddressLocationsDetailsBg,
  AddressLocationsTitle,
  AddressLocationsDetails,
  AddressLocationsBg
} from "./styledComponents";

class AddressLocations extends Component {
  render() {
    return (
      <AddressLocationsBg>
        <AddressLocationsTitle>{this.props.name}</AddressLocationsTitle>
        {this.props.fullDetails.map(AddressLocation => (
          <AddressLocationsDetailsBg>
            <AddressLocationsDetails>
              {AddressLocation.Floor}
            </AddressLocationsDetails>
            <AddressLocationsDetails>
              {AddressLocation.street}
            </AddressLocationsDetails>
            <AddressLocationsDetails>
              {AddressLocation.district}
            </AddressLocationsDetails>
            <AddressLocationsDetails>
              {AddressLocation.state}
            </AddressLocationsDetails>
          </AddressLocationsDetailsBg>
        ))}
      </AddressLocationsBg>
    );
  }
}
export default AddressLocations;
