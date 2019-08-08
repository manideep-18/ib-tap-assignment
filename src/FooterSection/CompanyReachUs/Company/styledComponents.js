import styled from "styled-components";

export const CompanyBg = styled.div`
  display: flex;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-left: 15px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 23vw;
    margin-left: 0px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;

export const CompanyTitle = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin: auto;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;

export const CompanyListBg = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const CompanyText = styled.span`
  font-family: Roboto;
  font-size: 13px;
  line-height: 1.43;
  color: #fff;
  opacity: 0.7;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin: auto;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
