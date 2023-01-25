import styled from "styled-components";
import bgLight from "../assets/bg-desktop-light.jpg";
import bgDark from "../assets/bg-desktop-dark.jpg";

function Background(props) {
  return <BackgroundImg src={props.isDarkTheme ? bgDark : bgLight} />;
}

const BackgroundImg = styled.img`
  width: 100vw;
  height: 300px;
  z-index: 0;
  @media (max-width: 375px) {
    height: 200px;
  }
`;

export default Background;
