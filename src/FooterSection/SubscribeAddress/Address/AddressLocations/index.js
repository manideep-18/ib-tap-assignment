import React, { Component } from "react";

class AddressLocations extends Component {
  render() {
    return (
      <AddressLocationsBg>
        <AddressLocationsTitle>{this.props.name}</AddressLocationsTitle>
        {this.props.AddressLocations.map(AddressLocation => (
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
              {AddressLocation.State}
            </AddressLocationsDetails>
          </AddressLocationsDetailsBg>
        ))}
      </AddressLocationsBg>
    );
  }
}
export default AddressLocations;
