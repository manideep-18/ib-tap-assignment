import styled from "styled-components";

export const HighlightCardBg = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const LogoImg = styled.img`
  height: 50px;
  width: 50px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    height: 50px;
    margin-left: 25px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    height: 50px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    height: 50px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    height: 50px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 50px;
  }
`;

export const HighlightTitleBg = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  margin-bottom: 5px;
  width: 12vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 60vw;
    margin-left: 10px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 12vw;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 37vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 27vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 12vw;
  }
`;

export const SubTitle = styled.span`
  margin-left: 5px;
  font-family: Roboto;
  font-style: normal;
  font-stretch: normal;
  margin-top: 0;
  color: #5e6977;
  width: 19vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 70vw;
    margin-left: 10px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 19vw;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 38vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 24vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 19vw;
  }
`;
