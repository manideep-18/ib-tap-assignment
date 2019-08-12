import styled from "styled-components";
export const UpSkillBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 69vh;
  width: 15vw;
  padding: 40px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 25px;
    width: 72vw;
    height: 65vh;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 28vw;
    padding: 10px;
    height: 60vh;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    height: 53vh;
    width: 20vw;
    padding: 40px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 59vh;
    width: 15vw;
    padding: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const UpSkillImg = styled.img`
  height: 100px;
  width: 100px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    height: 200px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    height: 100px;
    margin-top: 25px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 100px;
    margin-top: 25px;
  }
`;

export const UpSkillTitle = styled.span`
  margin-top: 25px;
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgb(32, 49, 76);
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-weight: bold;
    font-size: 19px;
    letter-spacing: 0.3px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 16px;
    font-weight: 600;

    letter-spacing: 0.3px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: normal;
  }
`;

export const UpSkillDescription = styled.p`
  font-family: Roboto;
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: rgb(32, 49, 76);
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 19px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 17px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;
