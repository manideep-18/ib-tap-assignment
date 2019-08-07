import styled from "styled-components";
export const EachFrameWorkBg = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin: auto;
    margin-top: 25px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;

export const EachFrameWorkImg = styled.img`
  height: 24px;
  width: 50px;
  margin: auto;
`;

export const EachFrameWorkInfoTitle = styled.span`
  font-size: 14px;
  font-style: italic;
  line-height: normal;
  text-align: center;
  color: rgb(94, 105, 119);
  margin-bottom: ${props => (props.infoTitle === "" ? "18px" : "0px")};
`;

export const EachFrameWorkSubTitle = styled.span`
  color: rgb(94, 105, 119);
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: center;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
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
    width: 14vw;
  }
`;
