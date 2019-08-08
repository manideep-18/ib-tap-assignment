import styled from "styled-components";

export const FooterSectionBg = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  margin: auto;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 90vw;
    margin: auto;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 80vw;
    margin: auto;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 65vw;
    margin: auto;
  }
`;

export const CopyRightText = styled.span`
  font-family: Roboto;
  font-size: 13px;
  line-height: 1.69;
  color: #fff;
  text-align: center;
  float: left;
  margin-left: 23vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-left: 40vw;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin-left: 5vw;
    margin-top: -40px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin-left: 11vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-left: 23vw;
  }
`;
