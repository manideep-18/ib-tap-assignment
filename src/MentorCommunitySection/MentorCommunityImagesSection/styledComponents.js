import styled from "styled-components";

export const MentorCommunityImagesSectionBg = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 92vw;
    margin: auto;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 90vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 50vw;
    margin: auto;
  }
`;

export const EachImage = styled.img`
  height: ${props => (props.status ? "53px" : "130px")};
  width: ${props => (props.status ? "120px" : "130px")};
  margin-top: ${props => (props.status ? "40px" : "")};
  padding: 0px 50px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: ${props => (props.status ? "0px 20px" : "0px 25px")};
    height: ${props => (props.status ? "53px" : "80px")};
    width: ${props => (props.status ? "120px" : "115px")};
    margin-top: ${props => (props.status ? "13px" : "")};
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    height: ${props => (props.status ? "53px" : "130px")};
    width: ${props => (props.status ? "120px" : "130px")};
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: ${props => (props.status ? "53px" : "130px")};
    width: ${props => (props.status ? "120px" : "130px")};
  }
`;
