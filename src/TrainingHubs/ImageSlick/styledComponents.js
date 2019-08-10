import styled from "styled-components";

export const ImageSlickBg = styled.div`
  width: 68vw;
  height: 60vh;
  margin: auto;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    height: 70vh;
    width: 85vw;
    margin: 0px;
    padding: 20px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 90vw;
    height: 53vh;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 96vw;
    height: 47vh;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 68vw;
    height: 62vh;
    margin: auto;
  }
`;

export const SlickImage = styled.img`
  height: 42%;
  width: 16vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    height: 45vh;
    width: 65vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    height: 37vh;
    width: 40vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    height: 37vh;
    width: 22vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 42%;
    width: 16vw;
  }
`;

export const SlickImageBg = styled.div`
  display: flex;
  flex-direction: column;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
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

export const SlickText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: left;
  color: #333;
  display: inline;
  text-align: center;
  margin-right: 18px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(151, 160, 176, 0.44),
    0 -1px 1px 0 rgba(151, 160, 176, 0.12);
  padding: 15px;
  border-bottom-style: groove;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-right: 0px;
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

export const ImageNext = styled.img`
  height: 12px;
  width: 20px;
  object-fit: contain;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(151, 160, 176, 0.44) 0px 1px 2px 0px,
    rgba(151, 160, 176, 0.12) 0px -1px 1px 0px;
  padding: 8px 13px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    display: none;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    bottom: -8vh;
    left: 49vw;
  }
`;

export const ImagePrev = styled.img`
  height: 12px;
  width: 20px;
  object-fit: contain;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(151, 160, 176, 0.44) 0px 1px 2px 0px,
    rgba(151, 160, 176, 0.12) 0px -1px 1px 0px;
  padding: 8px 13px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    display: none;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    left: 45vw;
    bottom: -8vh;
  }
`;

export const ImageBg = styled.div`
  display: flex;
  flex-direction: column;
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
    position: relative;
  }
`;
