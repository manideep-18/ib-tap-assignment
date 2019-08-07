import React, { Component } from "react";
import { CompanyBg, CompanyText } from "./styledComponents";
import { companyList } from "./companyLists";

class Company extends Component {
  render() {
    return (
      <CompanyBg>
        {companyList.map(EachCompany => (
          <CompanyText>{EachCompany.name}</CompanyText>
        ))}
      </CompanyBg>
    );
  }
}
export default Company;
