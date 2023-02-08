import { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "./components/Background";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import { fetchData, getTheme, getLocalData } from "./data/dataHandler";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme);
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [itemsLeft, setItemsLeft] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [localData, setLocalData] = useState(getLocalData);

  useEffect(() => {
    fetchData(setApiData, setItemsLeft);
    console.log("fetching...");
  }, [checkedItems, filter]);

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
          setItemsLeft={setItemsLeft}
          filter={filter}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          localData={localData}
          setLocalData={setLocalData}
        />
        <Footer
          isDarkTheme={isDarkTheme}
          itemsLeft={itemsLeft}
          setFilter={setFilter}
          setLocalData={setLocalData}
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
