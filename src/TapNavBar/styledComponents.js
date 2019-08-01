import styled from "styled-components";

export const TapNavBarSection = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.15);
  flex-direction: row;
  align-items: center;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 0px 25px;
    height: 75px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 10px 35px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
export const IbLogoImage = styled.img`
  width: 60px;
  object-fit: contain;
`;
export const TapContentsSection = styled.div`
  display: flex;
  padding: 25px;
  flex: 3;
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
    display: flex;
    justify-content: flex-end;
  }
`;

export const TapContentsImage = styled.img`
  margin-left: 5px;
  width: 8px;
  object-fit: contain;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    display: none;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    display: none;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: none;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;

export const IbLogoSection = styled.div`
  display: flex;
  flex: 2;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: flex;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    display: flex;
    padding-left: 40px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const TouchButtonSection = styled.div`
  margin-left: 10px;
  flex: 2;
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
    display: flex;
  }
`;
export const TouchButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #d35400;
  color: #d35400;
  background: white;
  &:hover {
    background: #d35400;
    color: white;
  }
`;

export const TapMenuSection = styled.div`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
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
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const TapMenuIcon = styled.img`
  width: 40px;
  height: 40px;
`;
