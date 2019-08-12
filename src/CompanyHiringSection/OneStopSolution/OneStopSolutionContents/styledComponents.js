import styled from "styled-components";

export const OneStopSolutionContentsBg = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 52vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 85vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 70vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 52vw;
    margin-top: 0px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 54vw;
    margin-top: 0px;
  }
`;
