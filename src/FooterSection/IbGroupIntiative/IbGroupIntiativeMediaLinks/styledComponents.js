import styled from "styled-components";

export const IbGroupIntiativeMediaLinksBg = styled.div`
  display: flex;
  width: 15vw;
  justify-content: center;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin: auto;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 19vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;

export const MediaLinkImg = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
`;
