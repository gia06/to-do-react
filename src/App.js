import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Background from "./components/Background";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

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
    // todo need to change bcg images according to mobile size
    <AppWrapper isDarkTheme={isDarkTheme}>
      <Background isDarkTheme={isDarkTheme} />
      <Main>
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <ToDoInput isDarkTheme={isDarkTheme} />
        <ToDoList isDarkTheme={isDarkTheme} />
      </Main>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.isDarkTheme ? "#171823" : "#ffffff")};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;
  width: 60%;
  max-width: 540px;
  min-width: 327px;
  z-index: 1;
  @media (max-width: 375px) {
    top: 48px;
  }
`;
