import styled from "styled-components";

export const ContacUsSectionBg = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 40px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 40px 0px;
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
    width: 46vw;
  }
`;

export const ContacUsSectionTitle = styled.span`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgb(67, 72, 77);
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
  }
`;

export const DetailsInputBoxBg = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 39vw;
  margin-top: 30px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 86vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    width: 70vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 38vw;
  }
`;

export const DetailsInputTextArea = styled.textarea`
  display: block;
  background-color: #f5f5f5;
  border: none;
  line-height: 50px;
  margin-top: 40px;
  padding: 14px 20px;
  height: 10vh;
  margin-left: -1vw;
  width: 35vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    height: 10vh;
    margin-left: 0vw;
    width: 71vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    height: 4vh;
    margin-left: 0vw;
    width: 64vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    height: 4vh;
    margin-left: 0vw;
    width: 63vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 10vh;
    margin-left: 0vw;
    width: 35vw;
  }
`;
