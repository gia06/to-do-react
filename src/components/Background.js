import styled from "styled-components";
import bgDeskLight from "../assets/bg-desktop-light.jpg";
import bgDeskDark from "../assets/bg-desktop-dark.jpg";
import bgMobLight from "../assets/bg-mobile-light.jpg";
import bgMobDark from "../assets/bg-mobile-dark.jpg";

function Background(props) {
  return <BackgroundImg isDarkTheme={props.isDarkTheme} />;
}

const BackgroundImg = styled.div`
  width: 100vw;
  height: 300px;

  background-image: url(${(props) =>
    props.isDarkTheme ? bgDeskDark : bgDeskLight});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 670px) {
    background-image: url(${(props) =>
      props.isDarkTheme ? bgMobDark : bgMobLight});
    height: 200px;
  }
`;

export default Background;
