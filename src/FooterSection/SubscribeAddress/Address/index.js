import React, { Component } from "react";
import AddressLocations from "./AddressLocations";
import { hqAddress, OperationalHqAddress } from "./AddressLocationList";
import { AddressBg } from "./styledComponents";

class Address extends Component {
  render() {
    return (
      <AddressBg>
        <AddressLocations name="HQ ADDRESS" fullDetails={hqAddress} />
        <AddressLocations
          name="OPERATIONAL HQ ADDRESS"
          fullDetails={OperationalHqAddress}
        />
      </AddressBg>
    );
  }
}
export default Address;
