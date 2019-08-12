import styled from "styled-components";

export const CourseTracksSectionBg = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 60px;
  padding: 40px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 0px 25px 40px 25px;
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
    margin-top: 40px;
    padding: 50px;
  }
`;

export const CourseTracksSectionTitle = styled.span`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 300;
  color: rgb(67, 72, 77);
  text-align: center;
`;

export const CourseTracksListBg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 36vw;
  margin: auto;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 75vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 87vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 36vw;
  }
`;
