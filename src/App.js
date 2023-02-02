import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Background from "./components/Background";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

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

  const updateItemStatus = async (id) => {
    try {
      const response = await (await axios.put(`${api}/update-toDo`)).data;
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
        <ToDoList
          isDarkTheme={isDarkTheme}
          apiData={apiData}
          updateItemStatus={updateItemStatus}
        />
        <Footer
          isDarkTheme={isDarkTheme}
          apiData={apiData}
          setApiData={setApiData}
          fetchData={fetchData}
        />
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
  width: 60%;
  position: absolute;
  top: 70px;
  max-width: 540px;
  min-width: 327px;
  font-size: 18px;

  @media (max-width: 546px) {
    top: 48px;
    font-size: 12px;
  }
`;
