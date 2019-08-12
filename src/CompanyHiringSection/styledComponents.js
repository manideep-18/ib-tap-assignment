import styled from "styled-components";

export const CompanyHiringBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 0px 25px 40px 25px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 20px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 15vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const CompanyTextTitle = styled.span`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 300;
  line-height: normal;
  color: #43484d;
  text-align: center;
`;

export const BorderImage = styled.img`
  height: 2px;
  width: 60vw;
  margin: auto;
  margin-top: 70px;
`;

export const LetsConnectButton = styled.button`
  margin-top: 30px;
  width: 120px;
  height: 34px;
  border: solid 1px #51c4f0;
  background-color: #51c4f0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19),
    inset 1px 1px 1px 0 hsla(0, 0%, 100%, 0.15);
  color: #fff;
`;
