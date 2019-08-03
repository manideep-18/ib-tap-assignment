import styled from "styled-components";
export const ProgramHighlightBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66vw;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 76vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 65vw;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 91vw;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 70vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 66vw;
  }
`;

export const ProgramTitle = styled.span`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #43484d;
  margin: unset;
`;

export const ProgramHighlightCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: flex;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    display: flex;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    display: flex;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: flex;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const ApplyButton = styled.button`
  margin-top: 30px;
  width: 120px;
  height: 34px;
  border: solid 1px #51c4f0;
  background-color: #51c4f0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19),
    inset 1px 1px 1px 0 hsla(0, 0%, 100%, 0.15);
  color: #fff;
`;
