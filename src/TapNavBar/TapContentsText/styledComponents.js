import styled from "styled-components";
export const TapContentsTextSection = styled.span`
  margin-left: 20px;
  font-family: Roboto;

  font-size: 16px;

  font-weight: 500;

  font-style: normal;

  font-stretch: normal;

  line-height: 1.46;

  letter-spacing: 0.5px;
padding-top:27px;
  color: "red";
  padding-bottom: ${props => (props.primary ? "27px" : "")};
  /* padding-bottom: ${props => (props.primary ? "39px" : "")}; */
  border-bottom: ${props => (props.primary ? "2px solid #d35400" : "")};
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: flex;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;
export const TapContentStyle = styled.div`
  display: flex;
`;
