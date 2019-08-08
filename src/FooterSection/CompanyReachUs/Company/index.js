import React, { Component } from "react";
import {
  CompanyBg,
  CompanyText,
  CompanyTitle,
  CompanyListBg
} from "./styledComponents";
import { companyList } from "./companyLists";

class Company extends Component {
  render() {
    return (
      <CompanyBg>
        <CompanyTitle>COMPANY</CompanyTitle>
        <CompanyListBg>
          {companyList.map(EachCompany => (
            <CompanyText>{EachCompany.name}</CompanyText>
          ))}
        </CompanyListBg>
      </CompanyBg>
    );
  }
}
export default Company;
