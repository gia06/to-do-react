import { useEffect, useState } from "react";
import bgLight from "./assets/bg-desktop-light.jpg";
import bgDark from "./assets/bg-desktop-dark.jpg";
import styled from "styled-components";
import axios from "axios";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const api = process.env.REACT_APP_API;

  const fetchData = async () => {
    // const i = await axios.get(`${api}/toDos`);
    // console.log(i);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BackgroundImg src={isDarkTheme ? bgDark : bgLight} />
      <Main>
        <Header>
          <Title>TODO</Title>
        </Header>

        <Input type="text" />
      </Main>
    </>
  );
}

export default App;

const BackgroundImg = styled.img`
  width: 100vw;
  height: 300px;
  z-index: 1;
  @media (max-width: 375px) {
    height: 200px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 450px;
  width: 60%;
  max-width: 540px;
  min-width: 327px;
`;

const Header = styled.div``;

const Title = styled.h1`
  height: 50px;
  color: #ffffff;
  text-align: left;
  font-size: 40px;
  font-height: 40px;
  font-weight: 700;
  letter-spacing: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 64px;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;
