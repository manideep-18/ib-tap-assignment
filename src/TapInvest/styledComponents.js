import styled from "styled-components";

export const TapInvestSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 25%;
  bottom: -62px;
  box-shadow: 0 2px 2px 0 rgba(56, 67, 83, 0.24),
    0 0 2px 0 rgba(56, 67, 83, 0.12);
  padding: 20px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    left: 10%;
    width: 70%;
    bottom: -41px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    left: 25%;
    width: 50%;
    bottom: -62px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    left: 5%;
    width: 85%;
    bottom: -62px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    left: 15%;
    width: 65%;
    bottom: -62px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    left: 25%;
    width: 50%;
    bottom: -62px;
  }
`;
export const TapInvestText = styled.span`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #0a2845;
  margin-bottom: 0;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 30px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;
