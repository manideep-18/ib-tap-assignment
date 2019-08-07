import styled from "styled-components";

export const CourseTracksListBg = styled.div`
  display: flex;
  flex-direction: column;
  height: 43vh;
  width: 35vw;
  margin-top: 25px;
  margin-left: 25px;
  background: #fff;
  box-shadow: rgba(56, 67, 83, 0.24) 0px 2px 2px 0px,
    rgba(56, 67, 83, 0.12) 0px 0px 2px 0px;
  border-image-source: linear-gradient(
    transparent,
    transparent 80%,
    rgba(0, 0, 0, 0.02) 95%,
    rgba(0, 0, 0, 0.04)
  );
  padding: 25px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    height: 60vh;
    width: 63vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin-left: 0px;
    height: 40vh;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-top: 25px;
    margin-left: 25px;
    height: 48vh;
  }
`;

export const CourseTracksListContents = styled.div`
  display: flex;
  flex-direction: column;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
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

export const CourseTracksListItem = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.81;
  letter-spacing: normal;
  color: rgb(94, 105, 119);
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin-top: 5px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-top: 0px;
  }
`;

export const CourseTracksListTitle = styled.span``;

export const CourseTracksDot = styled.div`
  height: 5px;
  width: 5px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  margin: auto 0px;
`;

export const CourseContentBg = styled.div`
  display: flex;
  padding-left: 15px;
  margin-top: 15px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-top: 0px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-top: 0px;
  }
`;
