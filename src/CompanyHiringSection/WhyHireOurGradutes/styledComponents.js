import styled from "styled-components";

export const WhyHireOurGradutesBg = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const WhyHireOurGradutesTitle = styled.span`
  font-size: 24px;
  letter-spacing: 0.5px;
  color: #43484d;
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 10px;
  text-align: center;
  margin-top: 40px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 19px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 24px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const WhyHireOurGradutesSubTiltle = styled.span`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #5e6977;
  text-align: center;
  margin-top: 15px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    font-size: 20px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin-top: 15px;
    font-size: 24px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-top: 15px;
    font-size: 24px;
  }
`;

export const CompanyAdvantagesBg = styled.div`
  display: flex;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 65vw;
    flex-direction: column;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 65vw;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 50vw;
    flex-direction: column;
    margin: 0px auto;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 74vw;
    justify-content: space-between;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 65vw;
    justify-content: space-between;
  }
`;
