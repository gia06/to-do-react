import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Background from "./components/Background";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")).isDarkTheme;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getTheme);
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState("all");

  const api = "http://localhost:3001"; //* process.env.REACT_APP_API;

  const fetchData = async (filterValue) => {
    try {
      console.log(filter);
      const response = await (await axios.get(`${api}/toDos`)).data;
      const filteredData =
        filterValue === "all"
          ? response.data
          : response.data.filter((todo) => todo.itemStatus === filterValue);
      console.log(filteredData);
      setApiData(filteredData);
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
    fetchData(filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify({ isDarkTheme }));
  }, [isDarkTheme]);

  return (
    <AppWrapper isDarkTheme={isDarkTheme}>
      <Background isDarkTheme={isDarkTheme} />
      <Main>
        <Header
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          // getTheme={getTheme}
          // setTheme={setTheme}
        />
        <ToDoInput isDarkTheme={isDarkTheme} />
        <ToDoList
          isDarkTheme={isDarkTheme}
          apiData={apiData}
          updateItemStatus={updateItemStatus}
        />
        <Footer isDarkTheme={isDarkTheme} setFilter={setFilter} />
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

  @media (max-width: 670px) {
    top: 48px;
    font-size: 12px;
  }
`;
