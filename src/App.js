import "./App.css";
import { useEffect, useState } from "react";
import bgLight from "./assets/bg-desktop-light.jpg";
import bgDark from "./assets/bg-desktop-dark.jpg";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const api = process.env.REACT_APP_API;

  const fetchData = async () => {
    const i = await axios.get(`${api}/toDos`);
    console.log(i);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Img src={isDarkTheme ? bgDark : bgLight} />
    </>
  );
}

export default App;

const Background = styled.img`
  width: 100vw;
  height: 300px;
  @media (max-width: 375px) {
    height: 200px;
  }
`;
