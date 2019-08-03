import styled from "styled-components";

export const WhoCanApplyBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 60px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 40px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 40px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const WhoTitle = styled.span`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 300;
  line-height: normal;
  color: #43484d;
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

export const WhoSubTitle = styled.span`
  padding-top: 15px;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: center;
  color: rgb(94, 105, 119);
`;

export const ApplicantListSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 60vw;
    flex-direction: column;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 60vw;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 90vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 65vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 60vw;
  }
`;

export const ApplyButtonWho = styled.button`
  margin-top: 30px;
  width: 120px;
  height: 34px;
  border: solid 1px #51c4f0;
  background-color: #51c4f0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19),
    inset 1px 1px 1px 0 hsla(0, 0%, 100%, 0.15);
  color: #fff;
`;
