import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Background from "./components/Background";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [apiData, setApiData] = useState("");

  const api = "http://localhost:3001"; //* process.env.REACT_APP_API;

  const fetchData = async () => {
    try {
      const response = await (await axios.get(`${api}/toDos`)).data;
      setApiData(response.data);

      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
        <ToDoList isDarkTheme={isDarkTheme} apiData={apiData} />
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

  @media (max-width: 375px) {
    top: 48px;
  }
`;
