import { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "./components/Background";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import { fetchData } from "./api/api";

function App() {
  const getTheme = () => {
    try {
      return JSON.parse(localStorage.getItem("theme")).isDarkTheme;
    } catch (error) {
      return false;
    }
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getTheme);
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [activeItems, setActiveItems] = useState(0);
  const [triggerDelete, setTriggerDelete] = useState("");
  const [testState, setTestState] = useState([]);

  // const [activeItems, setActiveItems] = useState(0);

  // useEffect(() => {
  //   console.log(deletedItem);
  // }, [deletedItem]);

  useEffect(() => {
    fetchData(filter, setApiData);
  }, [filter, triggerDelete]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify({ isDarkTheme }));
  }, [isDarkTheme]);

  return (
    <AppWrapper isDarkTheme={isDarkTheme}>
      <Background isDarkTheme={isDarkTheme} />
      <Main>
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <ToDoInput isDarkTheme={isDarkTheme} />
        <ToDoList
          isDarkTheme={isDarkTheme}
          apiData={apiData}
          setActiveItems={setActiveItems}
          setFilter={setFilter}
          setTriggerDelete={setTriggerDelete}
        />
        <Footer
          isDarkTheme={isDarkTheme}
          activeItems={activeItems}
          setFilter={setFilter}
          setTriggerDelete={setTriggerDelete}
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
  background: ${({ isDarkTheme }) => (isDarkTheme ? "#171823" : "#ffffff")};
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
