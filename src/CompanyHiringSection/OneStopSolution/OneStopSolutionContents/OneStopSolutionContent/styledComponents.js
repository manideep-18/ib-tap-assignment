import styled from "styled-components";
export const OneStopSolutionContentBg = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(56, 67, 83, 0.24) 0px 2px 2px 0px,
    rgba(56, 67, 83, 0.12) 0px 0px 2px 0px;
  width: 13vw;

  padding: 25px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 74vw;
    margin-top: 25px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 24vw;
    height: 15vh;
    margin-left: 10px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 16vw;
    margin-left: 15px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 27vh;
    width: 13vw;
    margin: 0px 20px 20px 20px;
  }
`;

export const OneStopSolutionContentTitle = styled.span`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: 0.3px;
  text-align: center;
  color: rgb(32, 49, 76);
  margin: auto;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 13px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const OneStopSolutionContentSubTitle = styled.span`
  font-family: Roboto;
  margin: auto;
  font-size: 21px;

  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 12px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 12vw;
    font-size: 18px;
  }
`;
